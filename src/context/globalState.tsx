import React, { useReducer } from 'react';
import axios from 'axios';
import GlobalContext from './globalContext';
import GlobalReducer from './globalReducer';
import { GET_PRODUCTS, GET_USERS, PRODUCTS_ERROR, USERS_ERROR } from './types';

interface ContextInterface {
  children: React.ReactElement;
}

const GlobalState = ({ children }: ContextInterface) => {
  const initialState = {
    allProducts: null,
    allUsers: null,
  };

  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  //get products
  const getProducts = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/products');
      dispatch({ type: GET_PRODUCTS, payload: res.data });
    } catch (error) {
      dispatch({ type: PRODUCTS_ERROR, payload: error });
    }
  };

  //get users
  const getUsers = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/users');
      dispatch({ type: GET_USERS, payload: res.data });
    } catch (error) {
      dispatch({ type: USERS_ERROR, payload: error });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        allProducts: state.allProducts,
        allUsers: state.allUsers,
        getProducts,
        getUsers,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
