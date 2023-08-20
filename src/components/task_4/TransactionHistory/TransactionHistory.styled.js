import styled from 'styled-components';

export const Table = styled.table`
  /* padding: 15px; */
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  background-color: ${props => props.theme.colors.grey};
  border-radius: 4px;
  overflow: hidden;
 
`;



export const TitleCell = styled.th`
    text-align: center;

    width: 100px;
    color: ${props => props.theme.colors.white};
    background-color: teal;
    
`;
