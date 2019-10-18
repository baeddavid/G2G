import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styles'

const Button = ({ children, onClick, primary, disabled, light, ...props }) => {
  
  return (
    <StyledButton 
      onClick={disabled ? null : onClick}
      primary={primary}
      light={light}
      disabled={disabled}
      {...props}
    >
      { children }
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  light: PropTypes.bool,
}

export default Button;

