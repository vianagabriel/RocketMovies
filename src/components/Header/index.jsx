import { Container, Profile } from "./styles";

import { MenuMobile } from '../MenuMobile'

import { FiMenu } from 'react-icons/fi';

import { Input } from '../Input';
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import placeholderImg from '../../assets/avatar_placeholder.svg'


export const Header = ({ handleMovieSearch }) => {
    const navigate = useNavigate();
    const { signOut, user } = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeholderImg;
 

    const [menuIsVisible, setMenuIsVisible] = useState(false)

    function handleSignOut(){
        navigate('/')
        signOut();
    }

    return (
        <Container >

            <h2>RocketMovies</h2>

            <FiMenu size={30} onClick={() => setMenuIsVisible(true)} />

            <MenuMobile
                handleMovieSearch={handleMovieSearch}
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
            />

            <div className="inputContainer">

                <Input 
                  placeholder='Pesquisar pelo titulo'
                  onChange={handleMovieSearch}
                />
            </div>

            <Profile>
                <div className="nameAndLogout">
                    <Link to='/profile'>
                    <p>{user.name}</p>

                    </Link>
                    <span onClick={handleSignOut}>Sair</span>
                </div>
                <Link to='profile'>
                 <img src={avatarUrl} alt="" />
                </Link>
            </Profile>

        </Container>
    )
}