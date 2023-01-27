import React, { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import GlobalContext from '../../context/globalContext';
import Card, { CardInterface } from '../Card/Card';
import { CardsList, Pagination } from './styles';

interface CardListInterface {
  cardsPerRow: string;
}

const CardList = ({ cardsPerRow }: CardListInterface) => {
  const [cardListWidth, setCardListWidth] = useState('80%');

  // get produts
  const data = useContext(GlobalContext);
  const { getProducts, allProducts } = data;

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // paginate products
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 8;
  const currentItems = allProducts?.products?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allProducts?.products?.length / 8);
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * 8) % allProducts?.products?.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    switch (cardsPerRow) {
      case '4':
        setCardListWidth('80rem');
        break;
      case '3':
        setCardListWidth('70rem');
        break;
      case '2':
        setCardListWidth('40rem');
        break;
      default:
        break;
    }
  }, [cardsPerRow]);

  return (
    <>
      <CardsList bgWidth={cardListWidth}>
        {allProducts == null ? (
          <p>Loading</p>
        ) : (
          currentItems.map((product: CardInterface) => (
            <Card
              key={product.id}
              thumbnail={product.thumbnail}
              title={product.title}
              brand={product.brand}
              price={product.price}
              images={product.images}
            />
          ))
        )}
      </CardsList>
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
    </>
  );
};

export default CardList;
