import styled from 'styled-components';

export const Container = styled.header`
  background-color: transparent;
  width: 100%;
  height: 11.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.BORDER};
  display: flex;
  align-items: center;
  justify-content: space-around;

  > svg{
    display: none;
  }


  > h2 {
    color: ${({ theme }) => theme.Colors.PINK};

  }

  .inputContainer{
    width: 63rem;
  }

  @media(max-width: 1050px){
    .inputContainer{
        display: none;
    }

    svg{
        display: block;
    }

  }
`;



export const Profile = styled.div`
display: flex;
align-items: center;
gap: .9rem;

.nameAndLogout{
    
    > a{
        color:${({ theme }) => theme.Colors.WHITE_TEXT};
        font-size: 1.4rem;
        font-weight: 700;
    }

    > span{
       color: ${({ theme }) => theme.Colors.GRAY_200};
       cursor: pointer;
       font-size: 1.4rem;
       font-weight: 400;
    }
}


@media(max-width: 1050px){
    display: none;
}

 > a {
  img{
    height: 6.4rem;
    border-radius: 9999px;
 }
 } 

`;


