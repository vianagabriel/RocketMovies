import { Container, Form, Background, ButtonContainer } from "./styles";
import { Input } from "../../components/Input";
import { Button } from '../../components/Button';

import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { ButtonText } from "../../components/ButtonText";
import { Link } from "react-router-dom";

export const SignUp= () => {
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo o que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input placeholder='Nome' icon={FiUser}/>
        <Input placeholder='E-mail' icon={FiMail}/>
        <Input placeholder='Senha' icon={FiLock}/>


        <ButtonContainer>

         <Button  title='Entrar' /> 
        </ButtonContainer>
        <Link to='/'>
         <ButtonText title='Volte para o login' icon={AiOutlineArrowLeft}/>
        </Link>
      </Form>

      <Background/>
    </Container>
  )
};