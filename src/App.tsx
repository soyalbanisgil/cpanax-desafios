import React from 'react';
import './App.css';
import Home from './pages/home';
import Products from './pages/products';
import GlobalState from './context/globalState';

function App() {
  return (
    <GlobalState>
      <>
        <Home />
        <Products />
      </>
    </GlobalState>
  );
}

export default App;
