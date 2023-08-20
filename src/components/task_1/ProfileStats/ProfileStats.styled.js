import styled from 'styled-components';

export const ListWrapper = styled.ul`
    display: flex;
    justify-content: center;
    gap: 5px;
`;

export const ItemWrapper = styled.li`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    width: 80px;
    height: 80px;

    border: 1px solid ${props => props.theme.colors.darkGrey};
    border-radius: 4px; 
`;

export const Reactions = styled.span`
    color: black;
    font-weight: bold; 
`;