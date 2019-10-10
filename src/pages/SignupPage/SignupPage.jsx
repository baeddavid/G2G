import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignupPage.module.css';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import userService from '../../services/userService';

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
      <Link to="/welcome">
        <span className={styles.backButton}>Back</span>
      </Link>
      <h1>Sign up</h1>
      <div className={styles.inputGroup}>
        <label htmlFor="name">What's your name?</label>
        <div className={styles.inputContainer}>
          <input 
            type="text" 
            id="name" 
            name="name"
            required
            autoComplete="off"
            value={name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="email">What's your email?</label>
        <div className={styles.inputContainer}>
          <input 
            type="text" 
            id="email" 
            name="email"
            required
            autoComplete="off"
            value={email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password">Password</label>
        <div className={styles.inputContainer}>
          <input 
            type="password" 
            id="password" 
            name="password"
            required
            autoComplete="new-password"
            value={password}
            onChange={handleChange}
            pattern="^([a-zA-Z0-9@*#]{8,15})$"
          />
        </div>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="passwordConf">Re-type password</label>
        <div className={styles.inputContainer}>
          <input 
            type="password" 
            id="passwordConf" 
            name="passwordConf"
            required
            autoComplete="new-password"
            value={passwordConf}
            onChange={handleChange}
          />
        </div>
      </div>
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={{name, email, password}}
        onCompleted={data => _confirm(data)}
      >
        {mutation => (
          <div 
            className={styles.darkButton}
            onClick={validSignUp() ? mutation : null}
          >
            Submit
          </div>
        )}
      </Mutation>
    </div>
  )

}