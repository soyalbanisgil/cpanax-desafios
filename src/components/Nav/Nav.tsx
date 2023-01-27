import React from 'react';
import { Link } from 'react-router-dom';
import { NavWrapper } from './styles';

const Nav = () => {
  return (
    <NavWrapper>
      <Link to={'/'}>Home</Link>
      <Link to={'/products'}>Products</Link>
      <Link to={'/users'}>Users</Link>
    </NavWrapper>
  );
};

export default Nav;
