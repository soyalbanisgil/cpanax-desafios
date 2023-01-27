import React, { useState } from 'react';
import Modal from 'react-modal';
import {
  Brand,
  CardContainer,
  ImageContainer,
  Price,
  TextContainer,
  Title,
  Image,
  ModalContainer,
  ImagesWrapper,
} from './styles';

export interface CardInterface {
  thumbnail: string;
  title: string;
  brand: string;
  price: number;
  id?: number;
  images: [];
}

const Card = ({ thumbnail, title, brand, price, images }: CardInterface) => {
  const [closeModal, setCloseModal] = useState(false);

  const handleClose = () => {
    setCloseModal(!closeModal);
  };

  return (
    <>
      <CardContainer onClick={handleClose}>
        <ImageContainer>
          <Image src={thumbnail} alt='' />
        </ImageContainer>
        <TextContainer>
          <Brand>{brand}</Brand>
          <Title>{title}</Title>
          <Price>${price}</Price>
        </TextContainer>
      </CardContainer>
      <Modal isOpen={closeModal} ariaHideApp={false}>
        <ModalContainer>
          <>
            <span className='close' onClick={handleClose}>
              X
            </span>
            <ImagesWrapper>
              {!images
                ? null
                : images.map((image) => <img src={image} alt='' />)}
            </ImagesWrapper>
          </>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default Card;
