import styled, { css } from "styled-components";

const Image = styled.img(
  ({ theme, ...props }) => css`
    width: 43px;
    margin-top: 2vh;
    object-fit: scale-down;
  `
);

export default Image;
