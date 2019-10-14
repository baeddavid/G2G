import React from 'react';
import StyledBackLink from './StyledBackLink';

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
