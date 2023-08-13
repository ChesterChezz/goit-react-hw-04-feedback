import { styled } from 'styled-components';

export const Title = styled.p`
  font-size: 25px;
  font-weight: 600;
`;

export const ButtonsDiv = styled.div`
  padding-left: 0px;
  list-style: none;
  display: flex;
  max-width: 200px;
  justify-content: space-between;
`;

export const Button = styled.button`
  &:hover {
    cursor: pointer;
  }
  padding: 5px 10px;
  font-weight: 500;
`;
