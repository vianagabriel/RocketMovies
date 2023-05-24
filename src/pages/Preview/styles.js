import styled from "styled-components";


export const Container = styled.div`
 width: 100%;

 > p {
    text-align: justify;
    
 }




`;

export const Main = styled.main`
  margin-inline: 12.3rem;
  margin-top: 8rem;
  max-height: 500px;
  overflow-y: auto;

  ::-webkit-scrollbar{
    width: 8px;

  }

  ::-webkit-scrollbar-thumb{
    background-color: ${({ theme }) => theme.Colors.PINK};
    border-radius: 5px;    
  }

  

  @media(min-width: 360px)and ( max-width: 600px){
    margin-inline: 2rem;
    max-height: none;
    margin-bottom: 5rem;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1.9rem;
  margin-block: 2.4rem;
  font-size: 3rem;
  color: ${({ theme }) => theme.Colors.WHITE_TEXT};

  @media(min-width: 360px)and ( max-width: 600px){
    flex-direction: column;
    font-size: 2rem;
  }
`;

export const ContainerInfos = styled.div`
 display: flex;
 align-items: center;
 gap: 8px;
 margin-bottom: 4rem;

 > img{
    height: 1.6rem;
    width: 1.6rem;
    border-radius: 9999px ;
 }

 > span{
    color: ${({ theme }) => theme.Colors.WHITE_TEXT};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
 }

 .dateAndTime{
    display: flex;
    gap: 8px;

    > svg {
        color: ${({ theme }) => theme.Colors.PINK};
        font-size: 18px;
    }
 }
`;


export const TagsContainer = styled.div`
 display: flex;
 align-items: center;
 gap: 8px;

 margin-bottom: 4rem;
`;

