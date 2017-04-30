import restful, { fetchBackend } from 'restful.js';

const api = restful('http://localhost:3000', fetchBackend(fetch));

var getUser = (id, callback) => {
  api.one('users', id).get().then((response) => {
    const userEntity = response.body();
    const user = userEntity.data();
    callback(user);

  }, (response) => {
    throw new Error('LOL 404 GL');
  });
}

var getStudent = (id, callback) => {
  api.one('students', id).get().then((response) => {
    const studentEntity = response.body();
    const student = studentEntity.data();
    callback(student);
  }, (response) => {
    throw new Error('LOL 404 GL');
  });
}

var getAdvisor = (id, callback) => {
  api.one('advisors', id).get().then((response) => {
    const advisorEntity = response.body();
    const advisor = advisorEntity.data();
    callback(advisor);
  }, (response) => {
    throw new Error('LOL 404 GL');
  });
}

var getFullAdvisor = (id, callback) => {
  let endpoint = 'advisors/' + id + '/full';
  api.all(endpoint).getAll().then((response) => {
    const advisorEntity = response.body();
    const advisor = advisorEntity.data();
    callback(advisor);
  }, (response) => {
    throw new Error('LOL 404 GL');
  });
}

var getAllStudents = (callback) => {
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

var getAllAdvisors = (callback) => {
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


var getCompany = (id, callback) => {
  api.one('companies', id).get().then((response) => {
    const companyEntity = response.body();
    const company = companyEntity.data();
    callback(company);
  }, (response) => {
    throw new Error('LOL 404 GL');
  });
}

var getConversation = (id, callback) => {
  api.one('conversations', id).get().then((response) => {
    const conversationEntity = response.body();
    const conversation = conversationEntity.data();
    callback(conversation);

  }, (response) => {
    throw new Error('LOL 404 GL');
  });
}

var getAdvisorConversations = (id, callback) => {
  const endpoint = 'advisors/' + id + '/conversations';
  api.all(endpoint, id).getAll().then((response) => {
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

var getStudentConversationsAttendances = (id, callback) => {
  let endpoint = 'students/' + id + '/conversation_attendances';
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

export {
  getAllStudents,
  getStudent,
  getUser,
  getAdvisor,
  getAllAdvisors,
  getCompany,
  getConversation,
  getAdvisorConversations,
  getStudentConversationsAttendances,
  getFullAdvisor
};
