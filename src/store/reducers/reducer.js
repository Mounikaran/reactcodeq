import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  token: null,
  profile: null,
  error: null,
  loading: false,
  user: null,
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

    default:
      return state;
  }
};

export default reducer;
