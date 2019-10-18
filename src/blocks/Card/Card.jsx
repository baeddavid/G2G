import styled, { css } from "styled-components";
import Image from "./Image";
import Container from "./Container";

const Card = styled.div(
  ({ theme, ...props }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: ${props.width || "30%"};
    height: ${props.height || "100%"};
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

    padding: 1vh 3vw;
    border: 2px solid;
    border-color: ${props.selected ? theme.primary : "transparent"};
    border-radius: 13px;
    margin: 0 2vw;

    background: ${theme.light};

    text-align: center;

    transition: border 0.3s;
  `
);

Card.Image = Image;
Card.Container = Container;

export default Card;
