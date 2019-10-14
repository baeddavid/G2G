import React from 'react';
import { StyledBackLink } from './styles';

const BackLink = (props) => {

  return (
    <StyledBackLink to="/welcome"
      {...props}
    >
      Back
    </StyledBackLink>
  )
}

export default BackLink;
