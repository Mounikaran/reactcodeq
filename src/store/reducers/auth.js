import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  token: null,
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
    user : action.user,
    token : action.token,
    loading : false,
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
    user : action.user,
    token : action.token,
    loading : false,
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
    user : null,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
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
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
