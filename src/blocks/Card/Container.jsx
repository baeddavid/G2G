import styled, { css } from "styled-components";

const Container = styled.div(
  ({ theme, ...props }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.5vh 0 4vh 0;
    width: 100%;
    height: 18vh;
  `
);

export default Container;
