import PropTypes from "prop-types";
import { Container, Title, Children } from './Section.styled'

export const Section = ({ title, children }) => {
    return (
        <Container>
            {title && <Title>{title}</Title>}
            <Children>{children}</Children>
       </Container> 
    )
}


Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};