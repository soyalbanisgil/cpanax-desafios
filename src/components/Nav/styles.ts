import styled from 'styled-components';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #ecf0f1;
  padding: 1rem 0;
  gap: 2rem;
  a {
    text-decoration: none;
    color: #2c3e50;

    &:hover {
      color: #e74c3c;
    }
  }
`;
