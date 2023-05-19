import { useState } from "react";
import { Container, Form, Background, ButtonContainer } from "./styles";
import { Input } from "../../components/Input";
import { Button } from '../../components/Button';

import { FiMail, FiLock } from 'react-icons/fi';
import { ButtonText } from "../../components/ButtonText";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";


export const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  function hanldeSignIn(){
   signIn({ email, password })

  };
  
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo o que assistir.</p>

        <h2>Faça seu login</h2>

        <Input 
          placeholder='E-mail' 
          type='email'
          icon={FiMail} 
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          placeholder='Senha' 
          type='password'
          icon={FiLock} 
          onChange={e => setPassword(e.target.value)}
        />


        <ButtonContainer>

          <Button 
            title='Entrar'
            onClick={hanldeSignIn} 
          />

        </ButtonContainer>
         
         <Link to='/register'>
          <ButtonText title='Criar conta' />
        </Link>
      </Form>

      <Background />
    </Container>
  )
};