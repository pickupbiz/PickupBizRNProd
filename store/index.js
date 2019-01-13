import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";

const logAction = store => {
  return next => {
    return action => {
      const result = next(action);
      console.log(`Caught in middleware ${JSON.stringify(result)}`);
      return result;
    };
  };
};

const store = createStore(rootReducer, applyMiddleware(logAction, thunk));
export default store;
