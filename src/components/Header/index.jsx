import { Container, Profile } from "./styles";

import { MenuMobile } from '../MenuMobile'

import { FiMenu } from 'react-icons/fi';

import { Input } from '../Input';
import { useState } from "react";

import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";



export const Header = () => {

    const { signOut } = useAuth();

    const [menuIsVisible, setMenuIsVisible] = useState(false)

    return (
        <Container>

            <h2>RocketMovies</h2>

            <FiMenu size={30} onClick={() => setMenuIsVisible(true)} />

            <MenuMobile
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
            />

            <div className="inputContainer">

                <Input placeholder='Pesquisar pelo titulo' />
            </div>

            <Profile>
                <div className="nameAndLogout">
                    <Link to='/profile'>
                        <p>Gabriel Viana</p>
                    </Link>
                    <span onClick={signOut}>Sair</span>
                </div>
                <Link to='profile'>
                 <img src="https://github.com/vianagabriel.png" alt="" />
                </Link>
            </Profile>

        </Container>
    )
}