import { GET_PRODUCTS, GET_USERS } from './types';

const GlobalReducer = (state: any, action: { type: any; payload: any }) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };
    default:
      return state;
  }
};

export default GlobalReducer;
