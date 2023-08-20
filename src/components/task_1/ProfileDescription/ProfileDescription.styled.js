import styled from'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 15px;
    border-radius: 8px; 
    margin-bottom: 15px;
    background-color: ${props => props.theme.colors.lightGrey};
`;

export const AvatarWraper = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
`;

export const AvatarImg = styled.img`
    width: 100%;
    height: 100%;
`;

export const Name = styled.p`
    color: black;
    font-weight: 700;
`;