import styled, { css } from "styled-components";

const ButtonRow = styled.div(
  ({ theme, ...props }) => css`
    /* width: 100%; */
    display: flex;
    justify-content: space-between;
  `
);

export default ButtonRow;
