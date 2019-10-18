import styled, { css } from "styled-components";
import Button from "./Button";
import ButtonRow from "./ButtonRow";
import DotRow from "./DotRow";
import Dot from "./Dot";
import Controller from "./Controller";

const PageNav = styled.div(
  ({ theme, ...props }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 60px;
    margin-top: auto;
  `
);

PageNav.Button = Button;
PageNav.ButtonRow = ButtonRow;
PageNav.DotRow = DotRow;
PageNav.Dot = Dot;
PageNav.Controller = Controller;

export default PageNav;
