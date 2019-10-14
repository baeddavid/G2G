import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledBackLink = styled(Link)(({theme, ...props}) => css`
  color: ${theme.light};
  text-decoration: none;
  font-size: 5vw;
  width: 100%;
  margin-top: 5vh;
  margin-left: 10vw;
`);

export default StyledBackLink;