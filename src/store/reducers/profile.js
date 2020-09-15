import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  profile: null,
  error: null,
  loading: false,
};

const profileLoading = (state, action) => {
    return updateObject(state, {
        error : null,
        loading : true,
    })
}

const profileLoaded = (state, action) => {
    return updateObject (state, {
        profile : action.profile,
        error : null,
        loading : false,
    })
}

const profileFail = (state, action) => {
    return updateObject(state, {
        error : action.error,
        loading : false,
    })
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.PROFILE_LOADING:
        return profileLoading(state, action);
      case actionTypes.PROFILE_LOADED:
        return profileLoaded(state, action);
      case actionTypes.PROFILE_LOADFAIL:
        return profileFail(state, action);
      default:
        return state;
    }
}

export default reducer;