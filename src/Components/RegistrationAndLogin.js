import React, { useState } from 'react';
import Box from './Box';
import styled from 'styled-components';
import Button from './Button';
import { register, login } from '../Actions/auth' 
import { connect } from 'react-redux';

const TextInput = styled.input`

`;

const RegistrationAndLogin = ({ history, dispatch }) => {
  const route = history.location.pathname.substring(1)
  
  const [state, setState] = useState({
    email: '',
    password: '',
    username: ''
  });

  const handleEvent = (event) => {
    event.preventDefault();
    const { type, value } = event.target;
    
    switch (type) {
      case 'email':
        setState({ ...state, email: value });
        break;
      case 'password':
        setState({ ...state, password: value });
        break;
      case 'text':
        setState({ ...state, username: value });
        break;
      case 'submit':
        console.log('submittin here');
        if(state.email && state.password && state.username && route === 'register') {
          dispatch(register(state))
          //.then(() => this.props.dispatch(login(username, password)));
        } else if(route === 'login') {
          dispatch(login())
        }
        break;
      default: 
        console.log(`No case defined for type: ${type}`)
     }
  } 
  console.log(state)
  return (
    <Box>
      <form>
        <TextInput type='email'  value={state.email} onChange={handleEvent} />
        <TextInput type='password'  value={state.password} onChange={handleEvent} />    
        { route === 'register' ? //conditional input base on reg or login
        <TextInput type='text'  value={state.username} onChange={handleEvent} />
         : null}
        <Button type='submit' onClick={handleEvent}>{route}</Button>
      </form>
    </Box>
  )
}

export default connect()(RegistrationAndLogin);