import styled, { css } from 'styled-components';

const StyledButton = styled.div(({ theme, primary, light, disabled, ...props }) => css `
    align-items: center;
    background: ${disabled ? 'transparent' : primary ? theme.primaryDark : theme.primary};
    border: .5vh solid ${disabled ? light ? theme.medium : theme.primaryDark : theme.primaryDark};
    border-radius: 5vh;
    color: ${disabled ? light ? theme.medium : theme.light : light ? theme.light : theme.light};
    display: flex;
    font-size: 3vh;
    font-weight: 800;
    height: 8vh;
    justify-content: center;
    line-height: 33px;
    margin: 0 auto;
    margin-bottom: ${props.marginBottom || '10vh'};
    margin-top: ${props.marginTop || 'auto'};
    transition: background-color .5s, color .5s;
    width: 68vw;
  `
);

export default StyledButton;