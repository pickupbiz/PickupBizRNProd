import { createStore, applyMiddleware } from "redux";
import userReducer from "../reducers/usersReducer";

const storeUser = createStore(userReducer);

export default storeUser;
