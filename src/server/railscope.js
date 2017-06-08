import restful, { fetchBackend } from 'restful.js';

const api = restful('http://localhost:3000', fetchBackend(fetch));
// const api = restful('https://young-hollows-35839.herokuapp.com', fetchBackend(fetch));
// const api = restful(process.env.REACT_APP_BACKEND_SERVER, fetchBackend(fetch));


/********************** UPDATE **********************/
const putResourceFactory = (resourceName) => (id, payload, callback, failure) => {
  api.one(resourceName, id).patch(payload).then((response) => {
      const resourceEntity = response.body();
      const resource = resourceEntity.data();
      console.log('Resource Updated.');
      callback(resource);
  }, (response) => {
    failure(response);
    throw new Error(response);
  })
}

/********************** POST **********************/

const postResourceFactory = (resourceName) => (payload, callback, failure) => {
  api.all(resourceName).post(payload).then((response) => {
    const resourceEntities = response.body();
    const resource = resourceEntities.data();
    console.log('Post New Resource.')
    callback(resource);
  }, (response) => {
    failure(response);
    throw new Error(response);
  })
}

/********************** SEARCH **********************/

const searchFactory = (resourceName) => (param, callback, failure) => {
  const endpoint = resourceName + "?search=" + param;
  api.all(endpoint).getAll().then((response) => {
    const resourceEntities = response.body();
    let resourceList = resourceEntities.map((entity) => entity.data());
    callback(resourceList);
  }, (response => {
    failure(response);
    throw new Error('LOL 404 GL');
  }));
}

/********************** VALIDATE **********************/

const validationFactory = (resourceName, query) => (param, callback, failure) => {
  const endpoint = `${resourceName}?${query}=${param}`;
  api.custom(endpoint).get().then((response) => {
    const resourceEntity = response.body();
    const resourceData = resourceEntity.data();
    callback(resourceData);
  }, (response => {
    failure(response);
    throw new Error('LOL 404 GL');
  }));
}

/********************** DELETE **********************/

const deleteOneFactory = (resourceName) => (id, callback, failure) => {
  api.one(resourceName, id).delete().then((response) => {
    console.log("Resource Deleted", response.body().data())
  }, (response) => {
    failure(response);
    throw new Error('Could not delete resource.')
  })
}

/********************** GET **********************/

const getOneFactory = (resourceName) => (id, callback, failure) => {
  api.one(resourceName, id).get().then((response) => {
    const resourceEntity = response.body();
    const resourceData = resourceEntity.data();
    callback(resourceData);
  }, (response) => {
    failure(response);
    throw new Error('LOL 404. Retry?')
  })
}

const getAllFactory = (resourceName) => (callback, failure) => {
  api.all(resourceName).getAll().then((response) => {
    const resourceEntities = response.body();
    let resourceList = resourceEntities.map((entity) => entity.data());
    callback(resourceList);
  }, (response => {
    failure(response);
    throw new Error('LOL 404 GL');
  }));
}

const getFullUserFactory = (resourceName) => (id, callback, failure) => {
  let endpoint = resourceName + '/' + id + '/full';
  api.all(endpoint).getAll().then((response) => {
    const userEntity = response.body();
    const user = userEntity.data();
    callback(user);
  }, (response) => {
    failure(response);
    throw new Error('LOL 404 GL');
  });
}

const getCustomFactory = (resourceName, resource) => (id, callback, failure) => {
  let endpoint = resourceName + '/' + id + '/' + resource;
  api.all(endpoint).getAll().then((response) => {
    const resourceEntities = response.body();
    let resourceList = resourceEntities.map((entity) => entity.data());
    callback(resourceList);
  }, (response) => {
    failure(response);
    throw new Error('LOL 404 GL');
  });
}

//AUTH
export const postUserToken = postResourceFactory('user_token');
export const putEmailVerification = putResourceFactory('email_verification');

//GET VALIDATE EMAIL
export const validateSchoolEmail = validationFactory('school_emails/validate', 'email');

// GET /:resourcenName/:id
export const getUser = getOneFactory('users');
export const getStudent = getOneFactory('students');
export const getAdvisor = getOneFactory('advisors');
export const getRecruiter= getOneFactory('recruiters');
export const getConversation = getOneFactory('conversations');
export const getMajor = getOneFactory('majors');
export const getSchool = getOneFactory('schools');
export const getEducation = getOneFactory('educations');
export const getCompany = getOneFactory('companies');
export const getAmaQuestion = getOneFactory('ama_questions');
export const getCity = getOneFactory('cities');
export const getState = getOneFactory('states');
export const getIndustry = getOneFactory('industries');
export const getAdvisorInvite = getOneFactory('advisor_invites');

// GET ALL /:resourceName
export const getAllAdvisors = getAllFactory('advisors');
export const getAllStudents = getAllFactory('students');
export const getAllSchools = getAllFactory('schools');
export const getAllMajors = getAllFactory('majors');
export const getAllCompanies = getAllFactory('companies');
export const getAllCities = getAllFactory('cities');
export const getAllStates = getAllFactory('states');

// GET /:user/:id/full
export const getFullStudent = getFullUserFactory('students');
export const getFullAdvisor = getFullUserFactory('advisors');
export const getFullRecruiter = getFullUserFactory('recruiters');
export const getFullUser = getFullUserFactory('users');


// GET /:user/:id/conversations
export const getStudentConversations = getCustomFactory('students', 'conversation_attendances');
export const getAdvisorConversations = getCustomFactory('advisors', 'conversations');
export const getAdvisorAmas = getCustomFactory('advisors', 'amas');

export const updateStudent = putResourceFactory('students');
export const updateUser = putResourceFactory('users');
export const updateWorkExperience = putResourceFactory('work_experiences');

export const joinConversationAttendances = postResourceFactory('conversation_attendances');
export const answerAma = putResourceFactory('ama_answers');

export const postNewConversation = postResourceFactory('conversations');
export const postStudent = postResourceFactory('students');
export const postAdvisor = postResourceFactory('advisors');
export const postEducation = postResourceFactory('educations');
export const postWorkExperience = postResourceFactory('work_experiences');
export const postAmaQuestion = postResourceFactory('ama_questions');
export const postAma = postResourceFactory('amas');
export const postAdvisorInvite = postResourceFactory('advisor_invites');

export const deleteConversationAttendance = deleteOneFactory('conversation_attendances');
export const deleteConversation = deleteOneFactory('conversations');
export const deleteExperience = deleteOneFactory('work_experiences');

export const searchMajors = searchFactory('majors');
