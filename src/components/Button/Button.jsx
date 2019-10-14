import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './StyledButton'

const Button = ({ children, onClick, primary, disabled, ...props }) => {
  
  return (
    <StyledButton 
      onClick={disabled ? null : onClick}
      primary={primary}
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
}

export default Button;

