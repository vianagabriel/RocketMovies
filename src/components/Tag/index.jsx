import { Container } from './styles';

export const Tag = ({ title, isPreview, ...rest }) => {
  return(
    <Container
    isPreview={isPreview}
    {...rest}>
      {title}
    </Container>
  )
};