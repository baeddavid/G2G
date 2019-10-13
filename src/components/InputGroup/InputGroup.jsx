import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledInputGroup = styled.div`
  margin: 7px 0;
  width: 80%;
`;

const StyledLabel = styled.label`
  margin-left: 5px;
  font-size: 4vw;
`;

const InputWrapper = styled.div`
  height: 5vh;
  width: 1fr;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  border: 1px solid #A5A5A7;
  box-sizing: border-box;
  border-radius: 1vh;
`;


const StyledInput = styled.input`
  caret-color: #FAB1A0;
  margin: auto 2vw;
  height: 4vh;
  font-size: 4vw;
`;

const StyledImg = styled.img`
  width: 3vh;
  object-fit: scale-down;
  margin-right: 2vw;
`;

const ForgotPasswordLink = styled.div`
  width: 100%;
  text-align: right;
  color: white;
  font-size: 3vw;
  line-height: 4vw;
`;

const InputGroup = ({name, label, value, onChange, type, ...props}) => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <StyledInputGroup>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <InputWrapper>
        <StyledInput
          type={type === 'password' ? (showPassword ? "text" : "password") : type || "text"}
          id={name}
          name={name}
          autoComplete="new-password"
          required
          value={value}
          onChange={onChange}
          {...props}
        />
        {type === 'password' && 
          <StyledImg 
            src="/eye@3x.png" alt="show password" 
            onClick={() => setShowPassword(!showPassword)}
          />
        }
      </InputWrapper>
      {type === 'password' &&
        // TODO: Add handleForgotPassword here
        <ForgotPasswordLink>
          Forgot password?
        </ForgotPasswordLink>
      }
    </StyledInputGroup>
  )
}

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
}

export default InputGroup;
