import { Header } from "../../components/Header";
import { Button } from '../../components/Button';
import { Note } from '../../components/Note';

import { FiPlus } from 'react-icons/fi';

import { Link } from "react-router-dom";

import { Container, Main } from "./styles";

export const Home = () => {
    return (
        <Container>
            <Header />

            <Main>
                <header>
                    <h2>Meus Filmes</h2>

                    <Link to='/create' className="btnContainer">
                        <Button title='Adicionar filme' icon={FiPlus} />
                    </Link>
                </header>



                <Note data={{
                    title: 'Interestellar',
                    rating: 4,
                    description: `Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data 
                    desconhecida.Cooper,
                    ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um 
                    fantasma que tenta...`,
                    tags: [
                        { id: '1', name: 'ação' },
                        { id: '2', name: 'Aventura' },
                    ]
                }} />

                <Note data={{
                    title: 'Interestellar',
                    rating: 4,
                    description: `Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data 
                    desconhecida.Cooper,
                    ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um 
                    fantasma que tenta...`,
                    tags: [
                        { id: '1', name: 'ação' },
                        { id: '2', name: 'Aventura' },
                    ]
                }} />

                <Note data={{
                    title: 'Interestellar',
                    rating: 4,
                    description: `Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data 
                    desconhecida.Cooper,
                    ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um 
                    fantasma que tenta...`,
                    tags: [
                        { id: '1', name: 'ação' },
                        { id: '2', name: 'Aventura' },
                    ]
                }} />
            </Main>
        </Container>
    )
}