import axios from "axios";
import * as actionTypes from "./actionTypes";

export const profileLoading = () => {
  return {
    type: actionTypes.PROFILE_LOADING,
  };
};

export const profileLoaded = (profile) => {
  return {
    type: actionTypes.PROFILE_LOADED,
    profile: profile,
  };
};

export const profileFail = (error) => {
  return {
    type: actionTypes.PROFILE_LOADFAIL,
    error: error,
  };
};


export const loadProfile = () => {
    return (dispatch) => {
        dispatch(profileLoading());
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));
        if (token) {
            axios.defaults.headers = {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            };
            axios
            .get(`http://127.0.0.1:8000/account/profiles/${user.pk}/`)
            .then(res => {
              const profile = JSON.stringify(res.data)
              localStorage.setItem('profile', profile);
              dispatch(profileLoaded(profile));
            })
            .catch(error => {
              dispatch(profileFail(error));
            });
        }
    }
}