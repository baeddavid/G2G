import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.div`
  align-items: center;
  background: ${({ primary }) => primary ? "#E19C8C" : "#FAB1A0"};
  border: .5vh solid #E19C8C;
  border-radius: 5vh;
  color: white;
  display: flex;
  font-size: 3vh;
  font-weight: 800;
  height: 8vh;
  justify-content: center;
  line-height: 33px;
  margin: 0 auto;
  margin-bottom: ${props => props.marginBottom || '10vh'};
  margin-top: ${props => props.marginTop || 'auto'};
  transition: background-color .5s;
  width: 70vw;
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

