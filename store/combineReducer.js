import { combineReducers } from "redux";
import cartItemsReducer from "./cartItemsReducer";
import usersReducer from "./usersReducer";

const combineReducer = combineReducers({
  cartItemsReducer,
  usersReducer
});

export const mapStateToProps = state => {
  return {
    cartItemsReducer: state.cartItemsReducer,
    usersReducer: state.usersReducer
  };
};

export default combineReducer;
