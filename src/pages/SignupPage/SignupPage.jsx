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
            onClick={mutation}
          >
            Submit
          </div>
        )}
      </Mutation>
    </div>
  )

}