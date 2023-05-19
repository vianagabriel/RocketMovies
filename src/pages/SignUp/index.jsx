import { useState } from "react";
import { Container, Form, Background, ButtonContainer } from "./styles";
import { Input } from "../../components/Input";
import { Button } from '../../components/Button';

import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { ButtonText } from "../../components/ButtonText";
import { Link, useNavigate } from "react-router-dom";
import { api } from '../../services/api';

export function SignUp  ()  {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ loading, setLoading ] = useState(false);
  
  const navigation = useNavigate();

  function handleSignUp(){
    if(!name || !email || !password){
      return alert('Preencha todos os campos!');
    }

    setLoading(true)

    api.post('/users', {name, email, password})
    .then(() => {
      alert('Usuário cadastrado com sucesso')
      navigation('/')
    }).catch((error) => {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert('Não foi possível cadastrar')
      }
      setLoading(false)
    })
    
  }


  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo o que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input 
        placeholder='Nome'
        type='text'
        icon={FiUser}
        onChange={e => setName(e.target.value)}
        />

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
         <Button  title='Cadastrar' loading={loading} onClick={handleSignUp} /> 
        </ButtonContainer>

        <Link to='/'>
         <ButtonText title='Volte para o login' icon={AiOutlineArrowLeft}/>
        </Link>
      </Form>

      <Background/>
    </Container>
  )
};