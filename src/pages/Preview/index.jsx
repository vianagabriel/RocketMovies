import { Container, Main, Title, ContainerInfos, TagsContainer } from "./styles";

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Ratings } from '../../components/Ratings';
import { Tag } from '../../components/Tag';

import { FiArrowLeft } from 'react-icons/fi';
import { CiClock2 } from 'react-icons/ci';
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import placeholderImg from '../../assets/avatar_placeholder.svg'
import { useAuth } from "../../hooks/auth";



export const Preview = () => {
  const [data, setData] = useState(null)

  const params = useParams();

  const { user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeholderImg;

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data)
    }

    fetchNote()
  }, [])

  return (
    <Container>
      <Header />
      <Main>
        <Link to='/'>
          <ButtonText icon={FiArrowLeft} title='Voltar' />
        </Link>

        {
          data && 
          <>
            <Title>
              <h2>{data.title}</h2>
              <Ratings rating={data.rating} />
            </Title>
            <ContainerInfos>
              <img src={avatarUrl} alt="" />
              <span>Por {user.name}</span>
              <span className="dateAndTime">
                <CiClock2 />
                20/04/2023 ás 08:00
              </span>

            </ContainerInfos>

            <TagsContainer>
              {
                 data.tags.map((tag, index) => (
                  <Tag key={String(index)} title={tag.name} isPreview />
                ))
               

              }
             
            </TagsContainer>

            <p>{data.description}</p>
          </>
        }

      </Main>
    </Container>
  )
};