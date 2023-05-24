import { Container, Profile } from "./styles";

import { Input } from "../Input";

import { AiOutlineClose } from 'react-icons/ai';
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import placeholderImg from '../../assets/avatar_placeholder.svg'
import { useNavigate } from "react-router-dom";

export const MenuMobile = ({ menuIsVisible, setMenuIsVisible, handleMovieSearch }) => {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeholderImg;

  function handleSignOut(){
    navigate('/')
    signOut();
}


  return(
    <Container menuIsVisible={menuIsVisible}>
      <AiOutlineClose size={30} onClick={() => setMenuIsVisible(false)}/>

       <Profile to='/profile'>
       <img src={avatarUrl} alt="" /> 
       <p>{user.name}</p>
       </Profile>

        <div className="inputContainer">

         <Input  placeholder='Pesquisar pelo titulo' onChange={handleMovieSearch}/>
        </div>

       <span onClick={handleSignOut}>Sair</span>
      


    </Container>
  )
};