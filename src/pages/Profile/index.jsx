import { Container, Form, Avatar } from './styles';

import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { Link } from 'react-router-dom';


export const Profile = () => {
    return (
        <Container>
            <header>
                <Link to='/'>
                    <ButtonText title='Voltar' icon={FiArrowLeft} />
                </Link>
            </header>

            <Form>
                <Avatar>
                    
                    <img src="https://github.com/vianagabriel.png" alt="foto do usuário" />
                    <label htmlFor="avatar">
                        <FiCamera />

                        <input id='avatar' type='file' />
                    </label>
                </Avatar>
                <Input
                    placeholder='Nome'
                    type='text'
                    icon={FiUser}
                />

                <Input
                    placeholder='E-mail'
                    type='text'
                    icon={FiMail}
                />

                <Input
                    placeholder='Senha Atual'
                    type='password'
                    icon={FiLock}
                />

                <Input
                    placeholder='Nova Senha'
                    type='password'
                    icon={FiLock}
                />
                <div className="btnContainer">

                    <Button title='Salvar' />
                </div>
            </Form>
        </Container>
    )
};