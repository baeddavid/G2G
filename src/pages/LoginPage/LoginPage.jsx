import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';
import { useMutation } from 'react-apollo';
import gql from 'graphql-tag';
import userService from '../../services/userService';
import Button from '../../components/Button/Button';

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

  const [showPassword, setShowPassword] = useState(false)

  const { email, password} = inputs;

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
      <Link className={styles.backButton} to="/welcome">
        <span>Back</span>
      </Link>
      <header>
        <h1>Log in</h1>
        <h2>Glad to see you again</h2>
      </header>
      <div className={styles.inputGroup}>
        <label htmlFor="email">Username or email</label>
        <div className={styles.inputContainer}>
          <input 
            type="text" 
            id="email" 
            name="email"
            autoComplete="off"
            required
            value={email}
            onChange={handleChange}
            />
        </div>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password">Password</label>
        <div className={styles.inputContainer}>
          <input 
            type={showPassword ? "text" : "password"} 
            id="password" 
            name="password"
            autoComplete="new-password"
            required
            value={password}
            onChange={handleChange}
          />
          <img 
            src="/eye@3x.png" alt="show password"
            onClick={() => {setShowPassword(!showPassword)}}
          />
        </div>
        <div 
          className={styles.forgotPassword}
          //TODO: insert forgotPasswordHandler here
        >
            Forgot password?
        </div>
      </div>

      {/* <div
        onClick={ email && password ? () => { login({ variables: {email, password}}) } : null}
        className={email && password ? styles.darkButton : styles.lightButton}
      >
        Let's go
      </div> */}
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