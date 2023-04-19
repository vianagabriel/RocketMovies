import { Container } from './styles';


export const ButtonText = ({ title, icon: Icon }) => {
    return (
        <Container>
            {Icon && <Icon size={20} />}
            {title}
        </Container>
    )

}; 