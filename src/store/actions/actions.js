import axios from "axios";
import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
  };
};

export const userLoading = () => {
  return {
    type: actionTypes.USER_LOADING,
  };
};

export const userLoaded = (user, token) => {
  return {
    type: actionTypes.USER_LOADED,
    user: user,
    token: token,
  };
};

export const userLoadFail = (error) => {
  return {
    type: actionTypes.USER_LOADFAIL,
    error: error,
  };
};

export const userUpdating = () => {
  return {
    type: actionTypes.USER_UPDATING,
  };
};

export const userUpdated = (user, token) => {
  return {
    type: actionTypes.USER_UPDATED,
    user: user,
    token: token,
  };
};

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

export const profileUpdating = () => {
  return {
    type: actionTypes.PROFILE_UPDATING,
  };
};

export const profileUpdated = (profile) => {
  return {
    type: actionTypes.PROFILE_UPDATED,
    profile: profile,
  };
};

export const profileUpdateFail = (error) => {
  return {
    type: actionTypes.PROFILE_UPDATE_FAIL,
    error: error,
  };
};

export const userUpdateFail = (error) => {
  return {
    type: actionTypes.USER_UPDATEFAIL,
    error: error,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("profile");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("user");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const authLogin = (username, password) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post("http://127.0.0.1:8000/rest-auth/login/", {
        username: username,
        password: password,
      })
      .then((res) => {
        const token = res.data.key;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout(3600));
      })
      .catch((err) => {
        if (err.message === "Request failed with status code 400")
          err.message = "Username and Password not match";
        console.log(err.message);
        dispatch(authFail(err));
      });
  };
};

export const authSignup = (username, email, password1, password2) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post("http://127.0.0.1:8000/rest-auth/registration/", {
        username: username,
        email: email,
        password1: password1,
        password2: password2,
      })
      .then((res) => {
        const token = res.data.key;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout(3600));
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};

export const loadUser = () => {
  return (dispatch) => {
    dispatch(userLoading());
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get("http://127.0.0.1:8000/rest-auth/user/")
        .then((res) => {
          const username = res.data.username;
          const user = JSON.stringify(res.data);
          const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
          localStorage.setItem("user", user);
          localStorage.setItem("expirationDate", expirationDate);
          dispatch(loadProfile(username, token));
          dispatch(userLoaded(user, token));
          dispatch(checkAuthTimeout(3600));
        })
        .catch((error) => {
          dispatch(userLoadFail(error));
        });
    }
  };
};
export const updateUser = (userData) => {
  return (dispatch) => {
    dispatch(userUpdating());
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (token) {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .put(`http://127.0.0.1:8000/account/users/${user.username}/`, userData)
        .then((res) => {
          const userUpdate = JSON.stringify(userData);
          const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
          localStorage.setItem("user", userUpdate);
          localStorage.setItem("expirationDate", expirationDate);
          dispatch(userUpdated(userUpdate, token));
          dispatch(checkAuthTimeout(3600));
        })
        .catch((error) => {
          dispatch(userUpdateFail(error));
        });
    }
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token === undefined) {
      dispatch(logout());
      dispatch(userLoadFail());
      dispatch(profileFail());
    } else {
      const user = localStorage.getItem("user");
      const profile = localStorage.getItem("profile");
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
        dispatch(userLoadFail());
        dispatch(profileFail());
      } else {
        dispatch(authSuccess(token));
        dispatch(userLoaded(user, token));
        dispatch(profileLoaded(profile));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};

export const loadProfile = (username, token) => {
  return (dispatch) => {
    dispatch(profileLoading());
    if (token) {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`http://127.0.0.1:8000/account/profiles/${username}/`)
        .then((res) => {
          const profile = JSON.stringify(res.data);
          const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
          localStorage.setItem("profile", profile);
          localStorage.setItem("expirationDate", expirationDate);
          dispatch(profileLoaded(profile));
        })
        .catch((error) => {
          dispatch(profileFail(error));
        });
    }
  };
};

export const updateProfile = (username, token, data) => {
  return (dispatch) => {
    dispatch(profileUpdating());
    if (token) {
      axios.defaults.headers = {
        "Content-Type": "multipart/form-data",
        Authorization: `Token ${token}`,
      };
      axios
        .put(`http://127.0.0.1:8000/account/profiles/${username}/`, data)
        .then((res) => {
          const profile = JSON.stringify(res.data);
          const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
          localStorage.setItem("profile", profile);
          localStorage.setItem("expirationDate", expirationDate);
          dispatch(profileUpdated(profile));
        })
        .catch((error) => {
          dispatch(profileUpdateFail(error));
        });
    }
  };
};
