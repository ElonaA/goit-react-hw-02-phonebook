import { Component } from 'react';

import { Section } from 'components/Section/Section';
import { ContactList } from 'components/ContactList/ContactList';
import  ContactForm  from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';

import { Inner} from './App.styled';

const dataId = require('shortid');


export class App extends Component {


state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: ''
}

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = data => {
    const { contacts } = this.state;

    if (contacts.find(({ name }) => name === data.name)) {
      alert(`Oh. no! ${data.name} is already exist in phonebook`);
      return;
    }
      
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: dataId.generate(),
            name: data.name,
            number: data.number,
          },
        ],
      };
    });
  };

  handleFilter = filter => {
    this.setState({
      filter,
    });
  };

  handleDelete = idData => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== idData),
      };
    });
  };

  filteredContacts () {
    const { contacts, filter } = this.state;

    return contacts.filter(data =>
      data.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };
  

  render() {
   const { filter } = this.state;
    
    return (
      <Inner>
      <Section title="Phonebook">
        <ContactForm onSubmit={this.handleSubmit} />
      </Section>
        <Section title="Contacts">
          <Filter filter={filter} onChangeFilter={this.handleFilter} />
        <ContactList data={this.filteredContacts()} onDeleteButton={this.handleDelete} />
        </Section>   
   </Inner>

    );
  }
}

