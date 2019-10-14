import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledButton = styled.div(({theme, ...props}) => css`
  align-items: center;
  background: ${props.primary ? theme.primaryDark : theme.primary};
  border: .5vh solid ${theme.primaryDark};
  border-radius: 5vh;
  color: white;
  display: flex;
  font-size: 3vh;
  font-weight: 800;
  height: 8vh;
  justify-content: center;
  line-height: 33px;
  margin: 0 auto;
  margin-bottom: ${props.marginBottom || '10vh'};
  margin-top: ${props.marginTop || 'auto'};
  transition: background-color .5s;
  width: 68vw;
`);

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

