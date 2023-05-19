import styled from "styled-components";


export const Container = styled.button`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.Colors.PINK};
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: .8rem;
`;