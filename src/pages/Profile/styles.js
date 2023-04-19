import styled from 'styled-components';

export const Container = styled.div`
 width: 100%;

 > header{
    background-color: ${({ theme }) => theme.Colors.BACKGROUND_500};
    width: 100%;
    height: 14.4rem;
    display: flex;
    align-items: center;
    padding: 0 12.4rem;

    @media(min-width: 360px) and (max-width: 500px){
    a{ 
        margin-left: -11rem ;

    }
  }
   
 }

 .btnContainer{
    height: 4.8rem;
    margin-top: 2.4rem;
 }




`;


export const Form = styled.form`
  width: 34rem;
  margin: 3rem auto;

 > div:nth-child(4){
    margin-top: 2.4rem ;
 }
`;

export const Avatar = styled.div`

  position: relative;
  margin: 0 auto 3.2rem ;
  width: 18.6rem;
  height: 18.6rem;
  margin-top: -120px;
  
  >img{
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 9999px;
  }

  > label {
     width: 4.8rem;
     height: 4.8rem;
     background: ${({ theme }) => theme.Colors.PINK};
     border-radius: 999px ;
     display: flex;
     justify-content: center;
     align-items: center;
     position: absolute;
     bottom: 7px;
     right: 7px;
     cursor: pointer;

     input {
         display: none;
     }

     svg{
        width: 20px;
        height: 20px;
        color: ${({ theme }) => theme.Colors.BACKGROUND_900};

     }
  }

 
`;