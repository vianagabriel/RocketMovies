import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:.8rem;
  align-items: center;
  border: none;
  border-radius: 1rem;

  background-color: ${({ theme, isDark }) => isDark ? theme.Colors.BACKGROUND_900: theme.Colors.PINK};
  color:  ${({ theme, isDark }) => isDark ? theme.Colors.PINK: theme.Colors.BACKGROUND_700};


  
`;