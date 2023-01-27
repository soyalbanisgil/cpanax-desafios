import styled from 'styled-components';

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 3rem 0;
  .BaseTable__table.BaseTable__table-main {
    display: flex;
    flex-direction: column-reverse;
    margin: 0 auto;
  }
  .BaseTable__body div {
    display: flex;
    justify-content: space-between;
  }

  .BaseTable__row {
    border-top: solid 1px white;
    &:hover {
      cursor: pointer;
    }
  }

  .BaseTable__row-cell {
    display: flex;
    align-items: center;
  }

  .BaseTable__header-row {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }

  .BaseTable__header-cell {
    display: flex;
    align-items: center;
  }
`;
