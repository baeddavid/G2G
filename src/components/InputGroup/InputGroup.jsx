import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledInputGroup } from './styles';

const InputGroup = ({name, label, value, onChange, type, ...props}) => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <StyledInputGroup>
      {label && <label htmlFor={name}>{label}</label>}
      <div className="input-wrapper">
        <input
          type={(type === 'password' || type === 'new-password') 
            ? (showPassword ? "text" : "password")
            : type || "text"}
          id={name}
          name={name}
          autoComplete="new-password"
          required
          value={value}
          onChange={onChange}
          {...props}
        />
        {(type === 'password' || type === 'new-password') && 
          <img 
            src="/eye@3x.png" alt="show password" 
            onClick={() => setShowPassword(!showPassword)}
          />
        }
      </div>
      {type === 'password' &&
        // TODO: Add handleForgotPassword here
        <div className="forgot-pw">
          Forgot password?
        </div>
      }
      {type === 'new-password' &&
        <div className="pw-reqs">
          - Minimum 8 characters<br/>
          - At least 1 number<br/>
          - At least 1 capital letter<br/>
        </div>
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
