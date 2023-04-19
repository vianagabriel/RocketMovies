import styled from 'styled-components';
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;



`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-inline: 13.6rem;



  > h1{
    color: ${({ theme }) => theme.Colors.PINK};
    font-size: 4.8rem;
  }

  > p{
    color: ${({ theme }) => theme.Colors.GRAY_100};
    font-size: 1.4rem; 
  }

  > h2{
    color: ${({ theme }) => theme.Colors.WHITE_TEXT};
    margin-block: 4.8rem;
    margin-right: auto;
  }

  @media(min-width: 320px)and (max-width: 600px){
      padding-inline: 0 ;
    }

`;

export const ButtonContainer = styled.div`
  height: 5.6rem;
  width: 100%;
  margin-top: 1.6rem;
  margin-bottom: 4.2rem;
`;

export const Background = styled.div`
    display: block;
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;


    @media(min-width: 320px)and (max-width: 600px){
      display: none;
    }
`;