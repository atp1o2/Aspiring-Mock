import restful, { fetchBackend } from 'restful.js';

const api = restful('http://localhost:3000', fetchBackend(fetch));

var getUser = (user, callback) => {
  api.one(user.role, user.id).get().then((response) => {
    const userEntity = response.body();
    const user = userEntity.data();
    callback(user);
  }, (response) => {
    throw new Error('LOL 404 GL');
  });
}

var getFullUser = (user, callback) => {
  let endpoint = user.role + '/' + user.id + '/full';
  api.all(endpoint).getAll().then((response) => {
    const advisorEntity = response.body();
    const advisor = advisorEntity.data();
    callback(advisor);
  }, (response) => {
    throw new Error('LOL 404 GL');
  });
}

var getConversations = (user, callback) => {
  let endpoint = user.role + '/' + user.id;
  if (user.role === 'advisors') {
    endpoint += '/conversations';
  }
  else if (user.role === 'students') {
    endpoint += '/conversation_attendances';
  }
  else {
    throw new Error('Specify valid User.');
  }
  api.all(endpoint).getAll().then((response) => {
    const conversationsEntities = response.body();
    let conversationList = [];
    conversationsEntities.forEach((conversationsEntity) => {
      const conversation = conversationsEntity.data();
      conversationList.push(conversation)
    })
    callback(conversationList);
  }, (response) => {
    throw new Error('LOL 404 GL');
  });
}

var getResource = (resource, callback) => {
  api.one(resource.name, resource.id).get().then((response) => {
    const resourceEntity = response.body();
    const resource = resourceEntity.data();
    callback(resource);
  }, (response) => {
    throw new Error('LOL 404 GL');
  });
}

var getAllUsers = (role, callback) => {
  api.all(role).getAll().then((response) => {
    const userEntities = response.body();
    let userList = [];
    userEntities.forEach((userEntity) => {
      userList.push(userEntity.data());
    })
    callback(userList);
  }, (response => {
    throw new Error('LOL 404 GL');
  }));
}

export {
  getUser,
  getFullUser,
  getConversations,
  getResource,
  getAllUsers
};
