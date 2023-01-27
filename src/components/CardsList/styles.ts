import styled from 'styled-components';

interface StylesCardsList {
  bgWidth: string;
}

export const CardsList = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: center;
  width: ${({ bgWidth }: StylesCardsList) => bgWidth};
  margin: 0 auto;
`;

export const Pagination = styled.div`
  width: 100%;
  margin: 5rem 0;
  .pagination {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 0;
    background-color: lightgray;
    li {
      padding: 1rem 0;
      list-style: none;
      background-color: lightgray;
      color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
