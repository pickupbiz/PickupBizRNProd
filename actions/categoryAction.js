import axios from "axios";
import http from "./httpService";
const apiEndpoint = "/categorys";
const apiEndpointSecure = "/categorys/secure";
import store from "../store/index";

function getUrl(id) {
  return `${apiEndpoint}/${id}`;
}

function categorySecureUrl() {
  const stores = store.getState();
  if (stores.userInfo.token != undefined)
    return `${apiEndpointSecure}/${stores.userInfo.token}`;
}

export const loadCategory = () => {
  return (dispatch, getState) => {
    dispatch({ type: "LOAD_CATEGORY_START" });
    http
      .get(categorySecureUrl())
      .then(function(response) {
        dispatch({
          type: "LOAD_CATEGORY_SUCCESS",
          payload: response.data
        });
      })
      .catch(function(error) {
        dispatch({ type: "LOAD_CATEGORY_FAILURE", payload: error });
      });
  };
};
