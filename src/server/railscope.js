import restful, { fetchBackend } from 'restful.js';

const api = restful('http://localhost:3000', fetchBackend(fetch));

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

const getOneFactory = (resourceName) => (id, callback) => {
  api.one(resourceName, id).get().then((response) => {
    const resourceEntity = response.body();
    const resourceData = resourceEntity.data();
    callback(resourceData);
  }, (response) => {
    throw new Error('LOL 404. Retry?')
  })
}

const getAllFactory = (resourceName) => (callback) => {
  api.all(resourceName).getAll().then((response) => {
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

const getFullUserFactory = (resourceName) => (id, callback) => {
  let endpoint = resourceName + '/' + id + '/full';
  api.all(endpoint).getAll().then((response) => {
    const advisorEntity = response.body();
    const advisor = advisorEntity.data();
    callback(advisor);
  }, (response) => {
    throw new Error('LOL 404 GL');
  });
}

const getConversationsFactory = (resourceName, conversation) => (id, callback) => {
  let endpoint = resourceName + '/' + id + '/' + conversation;
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

// GET /:resourcenName/:id
const getUser = getOneFactory('users');
const getStudent = getOneFactory('students');
const getAdvisor = getOneFactory('advisors');
const getRecruiter= getOneFactory('recruiters');
const getConversation = getOneFactory('conversations');
const getMajor = getOneFactory('majors');
const getSchool = getOneFactory('schools');
const getEducation = getOneFactory('educations');
const getCompany = getOneFactory('companies');

// GET /:resourceName
const getAllAdvisors = getAllFactory('advisors');
const getAllStudents = getAllFactory('students');
const getAllSchools = getAllFactory('schools');

// GET /:user/:id/full
const getFullStudent = getFullUserFactory('students');
const getFullAdvisor = getFullUserFactory('advisors');
const getFullRecruiter = getFullUserFactory('recruiters');

// GET /:user/:id/conversations
const getStudentConversations = getConversationsFactory('students', 'conversation_attendances');
const getAdvisorConversations = getConversationsFactory('advisors', 'conversations');

export {
  getUser,
  getStudent,
  getAdvisor,
  getRecruiter,
  getMajor,
  getSchool,
  getCompany,
  getConversation,
  getEducation,
  getAllAdvisors,
  getAllStudents,
  getAllSchools,
  getStudentConversations,
  getAdvisorConversations,
  getFullStudent,
  getFullAdvisor,
  getFullRecruiter,
  postUserToken
};
