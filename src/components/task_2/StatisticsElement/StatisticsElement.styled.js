import styled from 'styled-components';


export const Element = styled.li`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;
    border-radius: 4px;
    color: ${props => props.theme.colors.white};
`;

export const Percentage = styled.span`
    font-size: 18px;
`;