import { Container } from "../Note/styles";

import { Ratings } from '../Ratings';

import { Tag } from '../Tag'; 

export const Note = ({ data, ...rest }) => {
  return(
    <Container { ...rest}>
       <div className="titleAndRating">
        <h1>{data.title}</h1>
        <Ratings rating={data.rating}/>
       </div>

       <p>{data.description}</p>



    {
      data.tags && (
        <div className="tagsContainer">
        {data.tags.map(tag => (
            <Tag  key={tag.id} title={tag.name} />
          ))}
       </div>
      )
    }
   

    </Container>
  )
};