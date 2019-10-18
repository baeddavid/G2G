import styled, { css } from "styled-components";

const Dot = styled.div(
  ({ theme, ...props }) => css`
    height: 11px;
    width: 11px;
    border-radius: 50%;
    margin: 4px;
    background-color: ${props.highlight ? theme.primary : theme.medium};
  `
);

export default Dot;
