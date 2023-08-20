import styled, { css } from 'styled-components';


export const Card = styled.li`
  display: flex;
  gap: 10px;

  align-items: center;
  border-radius: 4px;
  width: 300px;
  padding: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const statusStyles = ({ isOnline }) => {
  if (isOnline) {
    return css`
      background-color: green;
    `;
  } else {
    return css`
      background-color: red;
    `;
  }
};

export const Status = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;

  ${statusStyles};
`;

export const Foto = styled.img`
  border-radius: 4px;
  padding: 5px;
  background-color: ${props => props.theme.colors.darkGrey};
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
