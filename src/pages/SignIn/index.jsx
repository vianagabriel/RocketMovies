import { Container, Form, Background, ButtonContainer } from "./styles";
import { Input } from "../../components/Input";
import { Button } from '../../components/Button';

import { FiMail, FiLock } from 'react-icons/fi';
import { ButtonText } from "../../components/ButtonText";

export const SignIn = () => {
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo o que assistir.</p>

        <h2>Faça seu login</h2>

        <Input placeholder='E-mail' icon={FiMail}/>
        <Input placeholder='Senha' icon={FiLock}/>


        <ButtonContainer>

         <Button  title='Entrar' /> 
        </ButtonContainer>

        <ButtonText title='Criar conta'/>
      </Form>

      <Background/>
    </Container>
  )
};