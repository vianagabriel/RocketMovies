import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.2rem;
  padding: .5rem 1.6rem;
  border-radius: .5rem;
  margin-right: .6rem;
  color: ${({ theme }) => theme.Colors.WHITE_COLOR_TAGS};
  background-color: ${({ theme , isPreview }) => isPreview ? theme.Colors.BACKGROUND_500 :theme.Colors.BACKGROUND_700}

`;