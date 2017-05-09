import restful, { fetchBackend } from 'restful.js';

const api = restful('http://localhost:3000', fetchBackend(fetch));

const postUserToken = (email, password, callback, failure) => {
  api.all('user_token').post(
    {auth:{email, password}}
  ).then((response)=>{
    const authEntity = response.body();
    const auth = authEntity.data();
    callback(auth);
  }, (response) => {
    failure(response);
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

const postResourceFactory = (resourceName) => (payload, callback, failure) => {
  api.all(resourceName).post(payload).then((response) => {
    const resourceEntities = response.body();
    const resource = resourceEntities.data();
    callback(resource);
    console.log('Resource Updated.', resource)
  }, (response) => {
    failure(response);
    throw new Error(response)
  })
}

/********************** SEARCH **********************/

const searchFactory = (resourceName) => (param, callback) => {
  const endpoint = resourceName + "?search=" + param;
  api.all(endpoint).getAll().then((response) => {
    const resourceEntities = response.body();
    let resourceList = resourceEntities.map((entity) => entity.data());
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
    const userEntity = response.body();
    const user = userEntity.data();
    callback(user);
  }, (response) => {
    throw new Error('LOL 404 GL');
  });
}

const getCustomFactory = (resourceName, resource) => (id, callback) => {
  let endpoint = resourceName + '/' + id + '/' + resource;
  api.all(endpoint).getAll().then((response) => {
    const resourcesEntities = response.body();
    let resourceList = [];
    resourcesEntities.forEach((resourcesEntity) => {
      const resource = resourcesEntity.data();
      resourceList.push(resource)
    })
    callback(resourceList);
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
const getAmaQuestion = getOneFactory('ama_questions');

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
const getStudentConversations = getCustomFactory('students', 'conversation_attendances');
const getAdvisorConversations = getCustomFactory('advisors', 'conversations');
const getAdvisorAmas = getCustomFactory('advisors', 'amas');

const updateStudent = putResourceFactory('students');
const updateUser = putResourceFactory('users');
const answerAma = putResourceFactory('ama_answers');

const postStudent = postResourceFactory('students');
// const postAdvisor = postResourceFactory('advisors');
const postEducation = postResourceFactory('educations');
const postWorkExperience = postResourceFactory('work_experiences');
const postAmaQuestion = postResourceFactory('ama_questions');
const postAma = postResourceFactory('amas');

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
  getAmaQuestion,
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
  postStudent,
  postEducation,
  postWorkExperience,
  postAma,
  postAmaQuestion,
  searchMajors,
  updateUser,
  getAdvisorAmas,
  answerAma,
};
