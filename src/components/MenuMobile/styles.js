import { Link } from 'react-router-dom';
import styled, { css }  from 'styled-components';



export const Container = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 5;
display: flex;
align-items: center;
justify-content: center;
gap: 5rem;
flex-direction: column;
padding-inline: 1rem;
opacity: 0;
pointer-events: none;

background: rgb(28,27,30);
background: linear-gradient(90deg, rgba(28,27,30,1) 19%, rgba(38,37,41,1) 100%);
transition:  .4s;

.inputContainer{
  display: initial;
  width: 350px;
}


${({ menuIsVisible }) => menuIsVisible && css`
  opacity: 1;
  pointer-events: auto;
 `}

> svg{
    position: absolute;
    top: 3rem;
    right: 3rem;
}

> span{
    color: ${({ theme }) => theme.Colors.GRAY_200}
}

@media(min-width: 1050px){
    display: none;
}

`;



export const Profile = styled(Link)`

display: flex;
align-items: center;
gap: 2rem;
color: ${({ theme }) => theme.Colors.WHITE};

 > img{
    height: 6.4rem;
    border-radius: 9999px;
}
`;