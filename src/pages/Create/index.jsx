import { Container, Main, Form, BoxInput, ButtonContainer } from './styles';

import { FiArrowLeft } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';



export const Create = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Link to='/'>
          <ButtonText icon={FiArrowLeft} title='Voltar' />
        </Link>
        <h2>Novo filme</h2>

        <Form>
          <div className="containerInput">
            <Input placeholder='Título' />
            <Input placeholder='Sua nota (de 0 a 5)' />
          </div>

          <div>
            <Textarea placeholder='Observações' />
          </div>


          <Section title='Marcadores'>
            <BoxInput>
              <NoteItem value='Aventura' />
              <NoteItem placeholder='Novo marcador' isNew />
            </BoxInput>
          </Section>
          <ButtonContainer>
            <div className="button">
              <Button title='Excluir filme' isDark />
            </div>
            <div className="button">
              <Button title='Salvar alterações' />
            </div>
          </ButtonContainer>
        </Form>
      </Main>
    </Container>
  )
};