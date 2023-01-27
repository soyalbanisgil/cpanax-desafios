import React, { useState } from 'react';
import styled from 'styled-components';
import CardList from '../components/CardsList/CardsLists';
import Nav from '../components/Nav/Nav';
import GlobalState from '../context/globalState';

const Products = () => {
  const [rowProducts, setRowProducts] = useState('');

  const handleChange = (event: any) => {
    setRowProducts(event.target.value);
  };

  return (
    <GlobalState>
      <>
        <Nav />
        <ProductsContainer>
          <h1>Products</h1>
          <label>
            Cuantos elementos te gustaria ver por fila?
            <br />
            <select defaultValue='4' onChange={handleChange}>
              <option value='4'>4</option>
              <option value='3'>3</option>
              <option value='2'>2</option>
            </select>
          </label>

          <CardList cardsPerRow={rowProducts} />
        </ProductsContainer>
      </>
    </GlobalState>
  );
};

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
`;

export default Products;
