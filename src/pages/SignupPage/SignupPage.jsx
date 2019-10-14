import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignupPage.module.css';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import userService from '../../services/userService';
import BackLink from '../../components/BackLink';
import InputGroup from '../../components/InputGroup/InputGroup';
import Button from '../../components/Button';


const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`

export const SignupPage = (props) => {

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })
  
  const { name, email, password, passwordConf } = inputs;

  const handleChange = (event) => {
    setInputs({...inputs, [event.target.name]: event.target.value})
  }

  const _confirm = (data) => {
    const { token } = data.signup;
    _saveUserData(token)
    props.history.push('/')
  }

  const _saveUserData = token => {
    localStorage.setItem('auth-token', token)
    props.setUser({userId: userService.getUser()})
  }

  const passwordMatch = () => password === passwordConf;

  const validPassword = () => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return regex.test(password);
  }

  const validEmail = () => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  }

  const validSignUp = () => {
    return passwordMatch() && validPassword() && validEmail()
  }  

  return (
    <div className={styles.SignupPage}>
      <BackLink />
      <header>
        <h1>Sign up</h1>
        <h2>Nice to meet you</h2>
      </header>
      <InputGroup 
        name="name"
        value={name}
        onChange={handleChange}
        label="Username"
      />
      <InputGroup
        name="email"
        value={email}
        onChange={handleChange}
        label="Email"
      />
      <InputGroup 
        type="new-password"
        name="password"
        value={password}
        onChange={handleChange}
        label="Password"
      />  
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={{name, email, password}}
        onCompleted={data => _confirm(data)}
      >
        {mutation => (
          <Button
            disabled={!(name && email && password)}
            primary={!!(name && email && password)}
            onClick={mutation}
          >
            Create Account
          </Button>
        )}
      </Mutation>
    </div>
  )

}