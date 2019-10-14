import styled, { css } from 'styled-components';

export const StyledInputGroup = styled.div(({theme, ...props}) => css`
  margin: 7px 0;
  width: 80%;

  label {
    margin-left: 5px;
    font-size: 4vw; 
  }

  .input-wrapper {
    height: 5vh;
    width: 1fr;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid #A5A5A7;
    box-sizing: border-box;
    border-radius: 1vh;  
  }

  input {
    caret-color: #FAB1A0;
    margin: auto 2vw;
    height: 4vh;
    font-size: 4vw;
  }

  img {
    width: 3vh;
    object-fit: scale-down;
    margin-right: 2vw;  
  }

  .forgot-pw {
    width: 100%;
    text-align: right;
    color: white;
    font-size: 3vw;
    line-height: 4vw; 
  }

  .pw-reqs {
    color: white;
    font-size: 3vw;
    line-height: 4vw;
    margin-left: 1vw;
    margin-top: .5vh;  
  }
`);
