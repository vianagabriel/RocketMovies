import { Container, Profile } from "./styles";

import { Input } from "../Input";

import { AiOutlineClose } from 'react-icons/ai';

export const MenuMobile = ({ menuIsVisible, setMenuIsVisible }) => {
  return(
    <Container menuIsVisible={menuIsVisible}>
      <AiOutlineClose size={30} onClick={() => setMenuIsVisible(false)}/>

       <Profile>
       <img src="https://github.com/vianagabriel.png" alt="" /> 
       <p>Gabriel Viana</p>
       </Profile>

        <div className="inputContainer">

         <Input  placeholder='Pesquisar pelo titulo'/>
        </div>

       <span>Sair</span>
      


    </Container>
  )
};