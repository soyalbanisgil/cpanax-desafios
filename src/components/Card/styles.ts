import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  max-width: 15rem;
  min-height: 10rem;
  &:hover {
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
`;

export const Image = styled.img`
  object-fit: contain;
  width: 90%;
  height: 100%;
`;

export const TextContainer = styled.div`
  background-color: #f8f8f8;
  height: 6rem;
  padding: 1rem 0.5rem;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.p``;

export const Brand = styled.p`
  font-size: 0.6rem;
  color: #8b8b8b;
  text-transform: uppercase;
`;

export const Price = styled.p`
  font-weight: bold;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  color: black;
  position: relative;

  .close {
    position: absolute;
    top: -1rem;
    right: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const ImagesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem;
  gap: 2rem;
`;
