import React, { useState } from 'react';
import styles from './LoginPage.module.css';
import { useMutation } from 'react-apollo';
import gql from 'graphql-tag';
import userService from '../../services/userService';
import Button from '../../components/Button';
import InputGroup from '../../components/InputGroup/InputGroup';
import BackLink from '../../components/BackLink';

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

export const LoginPage = (props) => {

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })

  const { email, password } = inputs;

  const _confirm = (data) => {
    const { token } = data.login
    _saveUserData(token)
    props.history.push('/')
  }

  const _saveUserData = token => {
    localStorage.setItem('auth-token', token)
    props.setUser({userId: userService.getUser()})
  }

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value})
  }

  const [login, { loading, error }] = useMutation( LOGIN_MUTATION, { onCompleted: data => _confirm(data) } );

  // TODO: INSERT COMPONENTS HERE
  if(loading) return <div>Loading...</div>
  if(error) return <div>Wrong signin Component</div>

  return (
    <div className={styles.LoginPage}>
      <BackLink />
      <header>
        <h1>Log in</h1>
        <h2>Glad to see you again</h2>
      </header>
      <InputGroup 
        name="email" 
        value={email} 
        label="Username or email"
        onChange={handleChange}
      />
      <InputGroup
        type="password"
        name="password"
        value={password}
        label="Password"
        onChange={handleChange}
      />
      <Button 
        disabled={!(email && password)}
        primary={!!(email && password)}
        onClick={() => { login({ variables: {email, password}})}}
      >
        Let's go
      </Button>
    </div>
  )
}