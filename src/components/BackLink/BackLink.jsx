import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 5vw;
  width: 100%;
  margin-top: 5vh;
  margin-left: 10vw;
`;

const BackLink = (props) => {

  return (
    <StyledLink to="/welcome"
      {...props}
    >
      Back
    </StyledLink>
  )
}

BackLink.propTypes = {

}

export default BackLink;
