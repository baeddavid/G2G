import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: 8vh;
  border: .5vh solid #E19C8C;
  border-radius: 5vh;
  background-color: #FAB1A0;
  font-size: 3vh;
  line-height: 33px;
  font-weight: 800;
  margin-top: auto;
  margin-bottom: 10vh;
  transition: background-color .5s;

  ${props => props.primary && css`
    background-color: #E19C8C;
  `};
`;

const Button = ({ children, onClick, primary, ...props }) => {
  return (
    <StyledButton 
      onClick={onClick}
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
}

export default Button;

