import styled from 'styled-components';

export const StyledHeader = styled.h1`
  font-weight: 400;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  border-radius: 6px;
  border-color: lightblue;
  margin-left: 8px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  list-style: none;
`;

export const StyledWrap = styled.div`
  margin-left: 50px;
  margin-top: 50px;
`;

export const StyledNotification = styled.p`
  font-style: italic;
`;
