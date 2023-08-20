import styled from 'styled-components';

export const Row = styled.tr`
  &:nth-child(odd) {
    background-color: ${props => props.theme.colors.white};
  }

  &:nth-child(even) {
    background-color: ${props => props.theme.colors.grey};
  }
`;

export const Cell = styled.td`
  padding-left: 10px;
`;

export const CellCenter = styled.td`
  text-align: center;
`;
