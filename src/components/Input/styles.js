import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.Colors.BACKGROUND_800};
  color: ${({ theme }) => theme.Colors.WHITE_TEXT};
  display: flex;
  align-items: center;
  margin-bottom: .8rem;

  > input{
    width: 100%;
    height: 5.6rem;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.Colors.WHITE_TEXT};
    padding: 1.2rem;

    &::placeholder{
        color: ${({ theme }) => theme.Colors.GRAY_200};
        font-weight: 400;
    }

}
  > svg{
    margin-left: 1.6rem;
    color: ${({ theme }) => theme.Colors.GRAY_200} ;
 
}

 

`;