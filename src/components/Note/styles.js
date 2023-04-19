import styled from "styled-components";


export const Container = styled.button`
 width: 100%;
 background-color: ${({ theme }) => theme.Colors.BACKGROUND_500};
 border: none;
 border-radius: 1rem;
 margin-bottom: 1.6rem;
 margin-top: 3.4rem;
 display: flex;
 justify-content: left;
 flex-direction: column;
 padding: 3.2rem;


 @media(min-width: 360px)and (max-width:600px){
     
   }

  .titleAndRating{
    h1{
    color: ${({ theme }) => theme.Colors.WHITE_TEXT};
    font-size: 2.4rem;
    margin-bottom: .8rem;
   }
  }

  > p{
    text-align: justify;
    color: ${({ theme }) => theme.Colors.GRAY_400};
    margin-block: 1.5rem;

  }
 
`;