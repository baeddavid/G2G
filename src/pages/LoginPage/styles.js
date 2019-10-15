import styled, { css } from 'styled-components';

export const StyledLoginPage = styled.div(({theme, ...props}) => css`

 
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-color: ${theme.primary};
  color: ${theme.light};
  
  header {
    width: 80%;
    margin-top: 5vh;
    margin-bottom: 2vh;
  }

  h1 {
    font-size: 9vw;
    line-height: 11vw;
    margin: 0;
  }

  h2 {
    margin: 0;
    font-size: 7vw;
    line-height: 9vw;
    font-weight: 100;
  }

`);