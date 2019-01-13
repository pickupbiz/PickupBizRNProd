import { createStore, applyMiddleware } from "redux";
import categoryReducer from "../reducers/categorysReducer";
import thunk from "redux-thunk";

const storeCategory = createStore(categoryReducer, applyMiddleware(thunk));

export default storeCategory;
