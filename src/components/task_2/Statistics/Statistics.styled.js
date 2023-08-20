import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: ${props => props.theme.colors.grey};
  border-radius: 8px;
`;

export const Title = styled.h2`
  margin-bottom: 15px;
`;

export const ElementWrapper = styled.ul`
  display: flex;
  gap: 5px;
`;
