import { createGlobalStyle } from 'styled-components'

export const colors = {
  lightred: '#E66767',
  lightgray: '#FFEBD9',
  white: '#FFF',
  lightwhite: '#F5F5F5',
  almostWhite: '#FFF8F2'
}

export const breakpoints = {
  desktop: '1023px',
  tablet: '767px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    text-decoration: none;
  }

  body {
    background-color: ${colors.almostWhite};
    color: ${colors.lightred};
  }

  li {
    list-style-type: none;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
}
`
