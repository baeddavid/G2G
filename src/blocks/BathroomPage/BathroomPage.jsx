import styled, { css } from "styled-components";

const BathroomPage = styled.div(
  ({ theme, ...props }) => css`
    height: 100vh;
    width: 100vw;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h2 {
      color: ${theme.primary};
      text-align: center;
      margin-top: 3vh;
      margin-bottom: 0;
    }

    h3 {
      margin: 2vh 0;
      text-align: center;
    }

    a {
      color: ${theme.medium};
    }

    p {
      font-size: 16px;
      line-height: 22px;
      margin-top: 2vh;
    }

    input {
      background: ${theme.light};
      border: 1px solid ${theme.dark};
      box-sizing: border-box;
      border-radius: 9px;
      padding: 0 15px;
      width: 100%;
      margin-bottom: 1.5vh;
      font-size: 24px;
      font-weight: 600;
      line-height: 33px;
      height: 48px;
      caret-color: ${theme.primary};
      font-family: "Nunito Sans", sans-serif;
    }

    textarea {
      background: ${theme.light};
      border: 1px solid ${theme.dark};
      box-sizing: border-box;
      border-radius: 9px;
      padding: 8px 15px;
      width: 100%;
      margin-bottom: 1.5vh;
      font-size: 24px;
      font-weight: 600;
      line-height: 33px;
      height: 20vh;
      caret-color: ${theme.primary};
      font-family: "Nunito Sans", sans-serif;
    }
  `
);

export default BathroomPage;
