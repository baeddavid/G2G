import styled, { css } from "styled-components";

const Image = styled.img(
  ({ theme, ...props }) => css`
    width: 43px;
    object-fit: scale-down;
    margin-bottom: 3vh;
  `
);

export default Image;
