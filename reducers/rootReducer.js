import { combineReducers } from "redux";
let initialState = {
  user: "Luqmaan Khan",
  userInfo: [],
  cart: [],
  categorys: [
    {
      numberOfDays: 30,
      reminderDays: 7,
      active: true,
      rate: 70,
      order: 1,
      createdDate: "2018-11-23T19:03:01.392Z",
      _id: "5bf84ee5d8742a27408e8d4c",
      name: "Test Category",
      subscriptionId: "7bf777e7a777ea7ba7c777e7"
    }
  ],
  isLoading: false,
  error: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_USER":
      return (state = {
        ...state,
        user: "Faizaan Khan"
      });
    case "LOAD_USERINFO_START":
      return (state = {
        ...state,
        isLoading: false
      });
    case "LOAD_USERINFO_SUCCESS":
      return (state = {
        ...state,
        userInfo: action.payload,
        isLoading: false
      });
    case "LOAD_USERINFO_FAILURE":
      return (state = {
        ...state,
        error: action.payload,
        isLoading: false
      });
    case "REMOVE_USERINFO_SUCCESS":
      return (state = {
        ...state,
        userInfo: [],
        isLoading: false
      });
    case "ADD_TO_CART":
      return (state = {
        ...state,
        cart: [...state.cart, action.payload]
      });
    case "REMOVE_FROM_CART":
      return (state = {
        ...state,
        cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)
      });
    case "LOAD_CATEGORY_START":
      return (state = {
        ...state,
        isLoading: true
      });
    case "LOAD_CATEGORY_SUCCESS":
      return (state = {
        ...state,
        categorys: action.payload,
        isLoading: false
      });
    case "LOAD_CATEGORY_FAILURE":
      return (state = {
        ...state,
        error: action.payload,
        isLoading: false
      });
    default:
      return state;
  }
};

export default rootReducer;
