import styled from 'styled-components';

export const ButtonCover = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 5px;
`;

export const Button = styled.button`
  padding: 10px;

  border: none;
  border-radius: 8px;
  color: white;
  background-color: blue;

  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;
