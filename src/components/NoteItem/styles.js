import styled from "styled-components";




export const InputContainer = styled.div`
 width: ${({ isNew }) => isNew ? '19rem':'13rem'};
 padding: 1.6rem;
 background-color: ${({ theme, isNew }) => isNew ? 'trasparent' : theme.Colors.BACKGROUND_800};
 border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.Colors.GRAY_200}` : 'none'} ;
 display: flex;
 align-items: center;
 gap: 1.6rem;
 border-radius: 1rem;

@media (min-width: 360px) and (max-width: 860px){
  width: 100%;
  justify-content: space-between;
}
 >input{
  width: ${({ isNew }) => isNew ? '12rem':'7rem'};
  background-color: transparent;
  color:  ${({ theme }) =>  theme.Colors.WHITE_TEXT};
  border: none; 
 }

 >button{
  border: none;
  background-color: transparent;

  svg{
    color: ${({ theme }) => theme.Colors.PINK};
    font-size:2.2rem;
    margin-top: 6px;
  }
 }


`;