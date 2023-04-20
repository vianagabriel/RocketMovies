import styled from 'styled-components';

export const Container = styled.div`
 width: 100%;
`;

export const Main = styled.main`
 margin-inline: 22.8rem;
 margin-top: 6.3rem;
 max-height: 500px;
 overflow-y: auto;
 
 ::-webkit-scrollbar{
    width: 8px;

  }

  ::-webkit-scrollbar-thumb{
    background-color: ${({ theme }) => theme.Colors.PINK};
    border-radius: 5px;    
  }

 >h2{
   font-size: 3.6rem;
   color: ${({ theme }) => theme.Colors.WHITE_TEXT};
   margin-top: 2.4rem;
   margin-bottom: 4rem;
 }

 @media(max-width: 860px){
    margin-inline: 5rem ;
   } 

   @media(min-width: 360px) and (max-width: 600px){
     max-height: none;
   } 

`;

export const Form = styled.form`
 display: flex;
 flex-direction: column;
 gap: 4rem;

 .containerInput{
  display: flex;
  gap: 4rem;
 }

 .button{
  width: 80rem;
  height: 5.6rem;
 }


 @media(max-width: 860px){
   .containerInput{
    flex-direction: column;
   } 
 
   .button{
    width: 100%;
   }
  
 }

`;

export const BoxInput = styled.div`
 display: flex;
 gap: 2.4rem;
 width: 100%;
 padding: 1.6rem;
 background-color: ${({ theme }) => theme.Colors.BACKGROUND_900};
 border-radius: 8px;

 @media(max-width:860px){
  background-color: transparent;
  flex-direction: column;
  padding: 0;
 }
`;


export const ButtonContainer = styled.div`
 display: flex;
 align-items: center;
 gap: 4rem;

 @media(max-width:860px){
   flex-direction: column;
   margin-bottom: 5rem;
 }
`;
