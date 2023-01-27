import { createContext } from 'react';

interface ContextInterface {
  allProducts: {};
  allUsers: {};
  getProducts: () => void;
  getUsers: () => void;
}

const defaultContext = {
  allProducts: { limit: 0, products: [], skip: 0, total: 0 },
  allUsers: { limit: 0, users: [], skip: 0, total: 0 },
  getProducts: () => {
    return;
  },
  getUsers: () => {
    return;
  },
};

const GlobalContext = createContext(defaultContext);

export default GlobalContext;
