import styled, { css } from "styled-components";

const DotRow = styled.div(
  ({ theme, ...props }) => css`
    display: flex;
    justify-content: center;
    width: 100%;
  `
);

export default DotRow;
