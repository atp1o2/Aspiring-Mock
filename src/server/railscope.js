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

/********************** UPDATE **********************/
const putResourceFactory = (resourceName) => (id, payload, callback) => {
  api.one(resourceName, id).patch(payload).then((response) => {
      console.log('Resource Updated.')
  }, (response) => {
    throw new Error(response)
  })
}

/********************** POST **********************/

const postResourceFactory = (resourceName) => (payload, callback) => {
  api.all(resourceName).post(payload).then((response) => {
      console.log('Resource Updated.')
  }, (response) => {
    throw new Error(response)
  })
}

/********************** SEARCH **********************/

const searchFactory = (resourceName) => (param, callback) => {
  const endpoint = resourceName + "?search=" + param;
  api.all(endpoint).getAll().then((response) => {
    const resourceEntities = response.body();
    let resourceList = [];
    resourceEntities.forEach((resourceEntity) => {
      resourceList.push(resourceEntity.data());
    })
    console.log(resourceList)
    callback(resourceList);
  }, (response => {
    throw new Error('LOL 404 GL');
  }));
}

/********************** GET **********************/

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
    const resourceEntities = response.body();
    let resourceList = [];
    resourceEntities.forEach((resourceEntity) => {
      resourceList.push(resourceEntity.data());
    })
    callback(resourceList);
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

// GET ALL /:resourceName
const getAllAdvisors = getAllFactory('advisors');
const getAllStudents = getAllFactory('students');
const getAllSchools = getAllFactory('schools');
const getAllMajors = getAllFactory('majors');
const getAllCompanies = getAllFactory('companies');
const getAllCities = getAllFactory('cities');
const getAllStates = getAllFactory('states');

// GET /:user/:id/full
const getFullStudent = getFullUserFactory('students');
const getFullAdvisor = getFullUserFactory('advisors');
const getFullRecruiter = getFullUserFactory('recruiters');

// GET /:user/:id/conversations
const getStudentConversations = getConversationsFactory('students', 'conversation_attendances');
const getAdvisorConversations = getConversationsFactory('advisors', 'conversations');

const updateStudent = putResourceFactory('students');
const updateUser = putResourceFactory('users');

const postEducation = postResourceFactory('educations');
const postWorkExperience = postResourceFactory('work_experiences');

const searchMajors = searchFactory('majors');



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
  getAllMajors,
  getAllCompanies,
  getAllCities,
  getAllStates,
  getStudentConversations,
  getAdvisorConversations,
  getFullStudent,
  getFullAdvisor,
  getFullRecruiter,
  postUserToken,
  updateStudent,
  postEducation,
  postWorkExperience,
  searchMajors,
  updateUser,
};
