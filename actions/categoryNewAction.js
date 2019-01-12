import { AsyncStorage } from "react-native";
import http from "./httpService";
const apiEndpoint = "/Categorys";

export async function addCategoryAsync(mobile, password) {
  try {
    const response = await http.post(apiEndpoint, { mobile, password });
    return response;
  } catch (ex) {
    return ex;
  }
}

export function addCategory(mobile, password) {
  return (dispatch, getState) => {
    addCategoryAsync(mobile, password)
      .then(response => {
        console.log("Successfully added category");
        // if (response) {
        //   dispatch({ type: "LOAD_USERINFO_START" });
        //   dispatch({
        //     type: "LOAD_USERINFO_SUCCESS",
        //     payload: response.data
        //   });
        // } else {
        //   console.log("User info not found");
        //   dispatch({
        //     type: "LOAD_USERINFO_FAILURE",
        //     payload: `User info data not found`
        //   });
        // }
      })
      .catch(error => {
        console.log("Failed to add category");
        // dispatch({
        //   type: "LOAD_USERINFO_FAILURE",
        //   payload: `User info data not found: ${error}`
        // });
      });
  };
}

export default {
  addCategory
};
