import { act } from "react-dom/test-utils";
import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  token: null,
  profile: null,
  error: null,
  loading: false,
  user: null,
  questions : null,
  question_error : null,
  question : null,
  answers : null,
  answers_error : null,
  comments : null,
  comments_error : null,

};

const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    error: null,
    loading: false,
  });
};

const userLoading = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: null,
  });
};

const userLoaded = (state, action) => {
  return updateObject(state, {
    user: action.user,
    token: action.token,
    loading: false,
  });
};

const userLoadFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const userUpdating = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: null,
  });
};

const userUpdated = (state, action) => {
  return updateObject(state, {
    user: action.user,
    token: action.token,
    loading: false,
  });
};

const userUpdateFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    token: null,
    user: null,
  });
};

const profileLoading = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const profileLoaded = (state, action) => {
  return updateObject(state, {
    profile: action.profile,
    error: null,
    loading: false,
  });
};

const profileFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const profileUpdating = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: null,
  });
};

const profileUpdated = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: null,
    profile: action.profile,
  });
};

const profileUpdateFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};

// tags

const tagsLoading = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: null,
  });
};

const tagsLoaded = (state, action) => {
  return updateObject(state, {
    loading: false,
    tags: action.tags,
    error: null,
  });
};

const tagsLoadFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};

//  Questions

const questionsLoading = (state, action) => {
  return updateObject(state, {
    loading : true,
    question_error : null,
  })
}

const questionsLoaded = (state, action) => {
  return updateObject(state, {
    loading: false,
    questions: action.questions,
    question_error: null, 
  })
}

const questionsLoadFail = (state, action) => {
  return updateObject(state, {
    loading : false,
    question_error: action.question_error,
  })
}
// get  questions
const getQuestionLoading = (state, action) => {
  return updateObject(state, {
    loading: true,
    question_error: null,
  });
}
const getQuestionLoaded = (state, action) => {
  return updateObject(state, {
    loading: false,
    question : action.question,
    question_error: null,
  });
}
const getQuestionLoadFail = (state, action) => {
  return updateObject(state, {
    loading: true,
    question_error: action.question_error,
  });
}
// get  answers
const answersLoading = (state, action) => {
  return updateObject(state, {
    loading: true,
    answers_error: null,
  });
}
const answersLoaded = (state, action) => {
  return updateObject(state, {
    loading: false,
    answers : action.answers,
    answers_error: null,
  });
}
const answersLoadFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    answers_error: action.answers_error,
  });
}
// get  comments
const commentsLoading = (state, action) => {
  return updateObject(state, {
    loading: true,
    comments_error: null,
  });
}
const commentsLoaded = (state, action) => {
  return updateObject(state, {
    loading: false,
    comments : action.comments,
    comments_error: null,
  });
}
const commentsLoadFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    comments_error: action.comments_error,
  });
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);

    case actionTypes.USER_LOADING:
      return userLoading(state, action);
    case actionTypes.USER_LOADED:
      return userLoaded(state, action);
    case actionTypes.USER_LOADFAIL:
      return userLoadFail(state, action);

    case actionTypes.USER_UPDATING:
      return userUpdating(state, action);
    case actionTypes.USER_UPDATED:
      return userUpdated(state, action);
    case actionTypes.USER_UPDATEFAIL:
      return userUpdateFail(state, action);

    case actionTypes.PROFILE_LOADING:
      return profileLoading(state, action);
    case actionTypes.PROFILE_LOADED:
      return profileLoaded(state, action);
    case actionTypes.PROFILE_LOADFAIL:
      return profileFail(state, action);

    case actionTypes.PROFILE_UPDATING:
      return profileUpdating(state, action);
    case actionTypes.PROFILE_UPDATED:
      return profileUpdated(state, action);
    case actionTypes.PROFILE_UPDATE_FAIL:
      return profileUpdateFail(state, action);

    case actionTypes.TAGS_LOADING:
      return tagsLoading(state, action);
    case actionTypes.TAGS_LOADED:
      return tagsLoaded(state, action);
    case actionTypes.TAGS_LOAD_FAIL:
      return tagsLoadFail(state, action);

    case actionTypes.QUESTIONS_LOADING:
      return questionsLoading(state, action);
    case actionTypes.QUESTIONS_LOADED:
      return questionsLoaded(state, action);
    case actionTypes.QUESTIONS_LOAD_FAIL:
      return questionsLoadFail(state, action);

    case actionTypes.QUESTION_LOADING:
      return getQuestionLoading(state, action);
    case actionTypes.QUESTION_LOADED:
      return getQuestionLoaded(state, action);
    case actionTypes.QUESTION_LOAD_FAIL:
      return getQuestionLoadFail(state, action);

    case actionTypes.ANSWERS_LOADING:
      return answersLoading(state, action);
    case actionTypes.ANSWERS_LOADED:
      return answersLoaded(state, action);
    case actionTypes.ANSWERS_LOAD_FAIL:
      return answersLoadFail(state, action);

    case actionTypes.COMMENTS_LOADING:
      return commentsLoading(state, action);
    case actionTypes.COMMENTS_LOADED:
      return commentsLoaded(state, action);
    case actionTypes.COMMENTS_LOAD_FAIL:
      return commentsLoadFail(state, action);

    default:
      return state;
  }
};

export default reducer;
