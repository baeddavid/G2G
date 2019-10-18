import styled, { css } from "styled-components";

const Button = styled.button(
  ({ theme, ...props }) => css`
    border: 1px solid;
    border-color: ${props.disabled ? theme.medium : theme.primaryDark};
    color: ${props.disabled ? theme.medium : theme.primaryDark};
    background: ${theme.light};
    border-radius: 8px;
    padding: 2px 6px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 160px;
    margin-left: ${props.last ? "auto" : 0};
  `
);

export default Button;
