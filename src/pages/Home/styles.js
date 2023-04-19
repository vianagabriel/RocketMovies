import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

 export const Main = styled.main`
  margin-inline: 9rem;
  margin-top: 5rem;
  max-width: 95%;
  height: 600px;
  overflow-y: auto;

  @media(min-width: 360px)and (max-width:600px){
      flex-direction: column;
      gap: 3rem;
      margin-inline: 2rem ;
      height: auto;
   }
  > header{
     display: flex;
     justify-content: space-between;

     .btnContainer{
        height: 4.8rem;
        width: 20.7rem;
     }

    > h2{
    color: ${({ theme }) => theme.Colors.WHITE};
    font-weight: 400;
   }

   @media(min-width: 360px)and (max-width:600px){
   align-items: center;
     
    .btnContainer{
      width: 50%;
    }
    h2{
      font-size: 1.8rem;
    }
   }
  }
 
  
 `;