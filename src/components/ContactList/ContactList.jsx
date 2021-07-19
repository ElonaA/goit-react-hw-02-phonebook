import PropTypes from "prop-types";
import { Inner, Title, Wrapper, Button, PersonBadge, TelephonePlus,  XCircle } from './ContactList.styled';

export const ContactList = ({ data, onDeleteButton}) => {
    
  return (
      <Inner>
      <ul>
      {data.map(({ id, name, number }) => (
        <li key={id}>
           <Wrapper>
           <PersonBadge /> <Title>{name} </Title>  <TelephonePlus /> <Title>{number}</Title>
          <Button id={id} onClick={() => onDeleteButton(id)}>
           < XCircle /> 
          </Button> </Wrapper>
        </li>
      ))}
      </ul>
      </Inner>
    );
}


ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onDeleteButton: PropTypes.func.isRequired,
};