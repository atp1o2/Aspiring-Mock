import restful, { fetchBackend } from 'restful.js';

const api = restful('http://localhost:3000', fetchBackend(fetch));

<<<<<<< HEAD
const postUserToken = (email, password, callback) => {
    api.all('user_token').post(
      {auth:{email, password}}
    ).then((response)=>{
      const authEntity = response.body();
      const auth = authEntity.data();
      callback(auth);
    }, (response) => {
      throw new Error('Invalid Credentials.');
    });
}

const getUser = (id, callback) => {
  api.one('users', id).get().then((response) => {
    const userEntity = response.body();
    const user = userEntity.data();
    callback(user);

  }, (response) => {
    throw new Error('LOL 404 GL');
  });
}

const getStudent = (id, callback) => {
  api.one('students', id).get().then((response) => {
    const studentEntity = response.body();
    const student = studentEntity.data();
    callback(student);
  }, (response) => {
    throw new Error('LOL 404 GL');
  });
}

const getAdvisor = (id, callback) => {
  api.one('advisors', id).get().then((response) => {
    const advisorEntity = response.body();
    const advisor = advisorEntity.data();
    callback(advisor);
=======
var getUser = (user, callback) => {
  api.one(user.role, user.id).get().then((response) => {
    const userEntity = response.body();
    const user = userEntity.data();
    callback(user);
>>>>>>> 57afcd0a183a4d98f0e0befd54f18af5c33c53c0
  }, (response) => {
    throw new Error('LOL 404 GL');
  });
}

<<<<<<< HEAD
const getFullAdvisor = (id, callback) => {
  let endpoint = 'advisors/' + id + '/full';
=======
var getFullUser = (user, callback) => {
  let endpoint = user.role + '/' + user.id + '/full';
>>>>>>> 57afcd0a183a4d98f0e0befd54f18af5c33c53c0
  api.all(endpoint).getAll().then((response) => {
    const advisorEntity = response.body();
    const advisor = advisorEntity.data();
    callback(advisor);
  }, (response) => {
    throw new Error('LOL 404 GL');
  });
}

<<<<<<< HEAD
const getAllStudents = (callback) => {
  api.all('students').getAll().then((response) => {
    const studentEntities = response.body();
    studentEntities.forEach((studentEntity) => {
      const student = studentEntity.data();
      callback(student);
    })
  }, (response => {
    throw new Error('LOL 404 GL');
  }));
}

const getAllAdvisors = (callback) => {
  api.all('advisors').getAll().then((response) => {
    const advisorEntities = response.body();
    let advisorList = []
    advisorEntities.forEach((advisorEntity) => {
      const advisor = advisorEntity.data();
      advisorList.push(advisor);
    })
    callback(advisorList);
  }, (response => {
    throw new Error('LOL 404 GL');
  }));
}


const getCompany = (id, callback) => {
  api.one('companies', id).get().then((response) => {
    const companyEntity = response.body();
    const company = companyEntity.data();
    callback(company);
  }, (response) => {
    throw new Error('LOL 404 GL');
  });
}

const getConversation = (id, callback) => {
  api.one('conversations', id).get().then((response) => {
    const conversationEntity = response.body();
    const conversation = conversationEntity.data();
    callback(conversation);

  }, (response) => {
    throw new Error('LOL 404 GL');
  });
}

const getAdvisorConversations = (id, callback) => {
  const endpoint = 'advisors/' + id + '/conversations';
  api.all(endpoint, id).getAll().then((response) => {
=======
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
>>>>>>> 57afcd0a183a4d98f0e0befd54f18af5c33c53c0
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

<<<<<<< HEAD
const getStudentConversationsAttendances = (id, callback) => {
  let endpoint = 'students/' + id + '/conversation_attendances';
  api.all(endpoint).getAll().then((response) => {
    const conversationsEntities = response.body();
    let conversationList = [];
    conversationsEntities.forEach((conversationsEntity) => {
      const conversation = conversationsEntity.data();
      conversationList.push(conversation)
    })
    callback(conversationList);
=======
var getResource = (resource, callback) => {
  api.one(resource.name, resource.id).get().then((response) => {
    const resourceEntity = response.body();
    const resource = resourceEntity.data();
    callback(resource);
>>>>>>> 57afcd0a183a4d98f0e0befd54f18af5c33c53c0
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
