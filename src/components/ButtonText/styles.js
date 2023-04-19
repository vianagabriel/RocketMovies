import styled from "styled-components";

export const Container = styled.a`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.Colors.PINK};
  display: flex;
  align-items: center;
  gap: .8rem;
`;