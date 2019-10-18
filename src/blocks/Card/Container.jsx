import styled, { css } from "styled-components";

const Container = styled.div(
  ({ theme, ...props }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1vh;
    margin-bottom: 1vh;
    width: 100%;

    div:first-child {
      margin-left: auto;
    }

    div:last-child {
      margin-right: auto;
    }
  `
);

export default Container;
