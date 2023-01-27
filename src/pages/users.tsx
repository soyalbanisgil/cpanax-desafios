import React from 'react';
import Nav from '../components/Nav/Nav';
import UsersTable from '../components/UsersTable/UsersTable';
import GlobalState from '../context/globalState';

const Users = () => {
  return (
    <GlobalState>
      <>
        <Nav />
        <UsersTable />
      </>
    </GlobalState>
  );
};

export default Users;
