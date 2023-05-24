import { Container, Main, Form, BoxInput, ButtonContainer } from './styles';

import { FiArrowLeft } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../services/api';



export const Create = () => {

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');

  const navigation = useNavigate();

  async function handleNewNote(){
    if(!title){
      return alert('Digite o titulo do filme.')
    }

    if(!rating){
      return alert('Digite a nota do filme.')
    }

    if(newTag){
      return alert('Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.')
    }

    await api.post('/notes', {
      title,
      description,
      rating,
      tags
     });

     alert('filme criado com sucesso')
     navigation('/')
  }

  function handleAddTag() {
    if (newTag == '') return;

    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

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
            <Input 
              placeholder='Título'
              onChange={e => setTitle(e.target.value)}
            />
            <Input 
              placeholder='Sua nota (de 0 a 5)'
              onChange={e => setRating(e.target.value)} 
            />
          </div>

          <div>
            <Textarea 
              placeholder='Observações'
              onChange={e => setDescription(e.target.value)} 
            />
          </div>


          <Section title='Marcadores'>
            <BoxInput>

              {
                tags.map((tag,index) => (
                  <NoteItem
                  key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }

              <NoteItem
                placeholder='Novo marcador'
                isNew
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />


            </BoxInput>
          </Section>
          <ButtonContainer>
            <div className="button">
              <Button title='Excluir filme' isDark />
            </div>
            <div className="button">
              <Button title='Salvar alterações' onClick={handleNewNote}/>
            </div>
          </ButtonContainer>
        </Form>
      </Main>
    </Container>
  )
};