import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Inner, Form, Input, Label,  } from './ContactForm.styled';



export default class ContactForm extends Component {

  static propTypes = {
  onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: ''
  } 

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  
  onSubmitContactForm = e => {
    e.preventDefault();
    
    this.props.onSubmit(this.state);

    this.reset();
  };

 onChangeContactForm = e => {
    const { name, value } = e.target;
    
    this.setState({
      [name]: value,
    });
  };


  render() {
    const { name, number } = this.state;

    return (
      <Inner>
        <Form onSubmit={this.onSubmitContactForm}>
          <Label >
            Name
          <Input
              name="name"
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChangeContactForm}
            />
          </Label>
          <Label>
            Phone
          <Input
              name="number"
              type="text"
              placeholder="Enter Phone Number"
              value={number}
              onChange={this.onChangeContactForm}
            />
          </Label>
          <Button type="submit">Add contacts</Button>
        </Form>
      </Inner>
    );
  }
};
