import { AsyncStorage } from "react-native";
import http from "./httpService";
const apiEndpoint = "/auth";
const tokenKey = "userInfo";

export async function loginAsync(mobile, password) {
  try {
    const response = await http.post(apiEndpoint, { mobile, password });
    return response;
  } catch (ex) {
    return ex;
  }
}

export function login(mobile, password) {
  return (dispatch, getState) => {
    alert('login-authservice');
    loginAsync(mobile, password)
      .then(response => {
        if (response) {
          dispatch({ type: "LOAD_USERINFO_START" });
          dispatch({
            type: "LOAD_USERINFO_SUCCESS",
            payload: response.data
          });
        } else {
          console.log("User info not found");
          dispatch({
            type: "LOAD_USERINFO_FAILURE",
            payload: `User info data not found`
          });
        }
      })
      .catch(error => {
        dispatch({
          type: "LOAD_USERINFO_FAILURE",
          payload: `User info data not found: ${error}`
        });
      });
  };
}

export function loginWithJwt(jwt) {
  AsyncStorage.setItem(tokenKey, jwt);
}

export function logout() {
  AsyncStorage.removeItem(tokenKey);
}

export function getJwt() {
  return AsyncStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  //getCurrentUser,
  getJwt
};
