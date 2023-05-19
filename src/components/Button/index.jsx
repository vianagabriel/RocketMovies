import { Container } from "./styles";

export const Button = ({isDark, title , icon: Icon, loading = false, ...rest}) => {
    return(
  <Container 
   isDark={isDark} 
   type="button"
   disabled={loading} 
   {...rest}
  >
    { Icon && <Icon size={20}/>}
    {loading ? 'Carregando...':title}
  </Container>)
};