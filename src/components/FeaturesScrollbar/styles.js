import styled, { css } from 'styled-components';

export const StyledFeaturesScrollbar = styled.div(({theme, ...props}) => css`

  .hs {
    display: flex;
    overflow-x: scroll;
    justify-content: flex-start;
    scroll-snap-type: x proximity;
    margin: 0;
  }

  .hs li:first-child {
    margin-left: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  .card {
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 1vh 3vw;
    min-width: 100px;
    max-width: 100px;
    margin-bottom: 10px;
    margin-right: 10px;
    border-radius: 13px;
    height: 120px;
    background-color: ${theme.light};
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  }

  .card img {
    margin-top: 10px;
    height: 40px;
    width: 40px;
    object-fit: scale-down;
  }

  .end {
    min-width: 1px;
  }
  
  .noScrollbar {
    scrollbar-width: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .noScrollbar::-webkit-scrollbar {
    display: none;
  }

`);

