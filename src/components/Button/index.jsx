import { Container } from "./styles";

export const Button = ({isDark, title , icon: Icon}) => {
    return(
  <Container isDark={isDark}>
    { Icon && <Icon size={20}/>}
    {title}
  </Container>)
};