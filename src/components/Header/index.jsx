import { Container, Profile} from "./styles";

import { MenuMobile } from '../MenuMobile'

import { FiMenu } from 'react-icons/fi';

import { Input } from '../Input';
import { useState } from "react";

export const Header = () => {

    const [ menuIsVisible, setMenuIsVisible ] = useState(false)

    return(
        <Container>

            <h2>RocketMovies</h2>

            <FiMenu size={30} onClick={() => setMenuIsVisible(true)}/>

            <MenuMobile
             menuIsVisible={menuIsVisible}
             setMenuIsVisible={setMenuIsVisible}
            />

            <div className="inputContainer">

             <Input placeholder='Pesquisar pelo titulo'/>
            </div>

            <Profile>
                <div className="nameAndLogout">
                    <p>Gabriel Viana</p>
                    <span>Sair</span>
                </div>

                <img src="https://github.com/vianagabriel.png" alt="" />
            </Profile>

        </Container>
    )
}