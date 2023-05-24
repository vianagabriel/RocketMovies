import { Header } from "../../components/Header";
import { Button } from '../../components/Button';
import { Note } from '../../components/Note';

import { FiPlus } from 'react-icons/fi';

import { Link, useNavigate } from "react-router-dom";

import { Container, Main } from "./styles";
import { useState, useEffect } from "react";
import { api } from "../../services/api";



export const Home = () => {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    const navigate = useNavigate();


    function handleMovieSearch(e) {
        setSearch(e.target.value)
    }


    function handlePreview(id){
        navigate(`/preview/${id}`)
      }

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get(`/notes?title=${search}`)
            setMovies(response.data);
        }
        fetchMovies()
    }, [search])

    return (
        <Container>
            <Header handleMovieSearch={handleMovieSearch} />

            <Main>
                <header>
                    <h2>Meus Filmes</h2>

                    <Link to='/create' className="btnContainer">
                        <Button title='Adicionar filme' icon={FiPlus} />
                    </Link>
                </header>


                {
                    movies.map((movie) => (
                      <Note
                        key={movie.id}
                        data={{
                          title: movie.title,
                          description: movie.description,
                          rating: movie.rating,
                          tags: movie.tags,
                        }}
                        onClick={() => handlePreview(movie.id) }
                      />
                    ))
                }


            </Main>
        </Container>
    )
}