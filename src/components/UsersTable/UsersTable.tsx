import React, { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Modal from 'react-modal';
import BaseTable, { Column } from 'react-base-table';
import GlobalContext from '../../context/globalContext';
import { TableWrapper } from './styles';
import { Pagination } from '../CardsList/styles';
import { ModalContainer } from '../Card/styles';

const UsersTable = () => {
  const [closeModal, setCloseModal] = useState(false);
  const [modalData, setModalData] = useState({
    firstName: '',
    lastName: '',
    address: { address: '' },
    birthdate: '',
    age: 0,
    gender: '',
    email: '',
    phone: '',
  });

  // get users
  const data = useContext(GlobalContext);
  const { getUsers, allUsers } = data;

  useEffect(() => {
    if (!allUsers) {
      getUsers();
    }
  }, [allUsers, getUsers]);

  // paginate users
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 8;
  const currentItems = allUsers?.users?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allUsers?.users?.length / 8);
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * 8) % allUsers?.users?.length;
    setItemOffset(newOffset);
  };

  const handleClose = () => {
    setCloseModal(!closeModal);
  };

  const handleRowClick = {
    onClick: (e: any) => {
      handleClose();
      setModalData(e.rowData);
    },
  };

  return (
    <>
      {!allUsers ? (
        <p>Loading</p>
      ) : (
        <TableWrapper>
          <BaseTable
            rowEventHandlers={handleRowClick}
            data={currentItems}
            width={1200}
            height={460}
          >
            <Column key='id' dataKey='id' title='ID' width={50} />
            <Column key='name' dataKey='firstName' title='Name' width={100} />
            <Column
              key='lastName'
              dataKey='lastName'
              title='LastName'
              width={100}
            />
            <Column
              key='username'
              dataKey='username'
              title='Username'
              width={100}
            />
            <Column key='ip' dataKey='ip' title='IP' width={150} />
          </BaseTable>
          <Pagination>
            <ReactPaginate
              className='pagination'
              breakLabel='...'
              nextLabel='>'
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel='<'
            />
          </Pagination>
        </TableWrapper>
      )}
      <Modal
        style={{
          content: { width: '320px', height: '320px', margin: '0 auto' },
        }}
        isOpen={closeModal}
        ariaHideApp={false}
      >
        <ModalContainer>
          <span onClick={handleClose} className='close'>
            X
          </span>
          <h1>
            {modalData.firstName} {modalData.lastName}
          </h1>
          <p>Email: {modalData.email}</p>
          <p>Phone: {modalData.phone}</p>
          <p>Birthdate: {modalData.birthdate}</p>
          <p>Gender: {modalData.gender}</p>
          <p>Address: {modalData.address.address}</p>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default UsersTable;
