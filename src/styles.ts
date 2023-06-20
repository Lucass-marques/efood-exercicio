import { createGlobalStyle, styled } from 'styled-components'

export const colors = {
  lightred: '#E66767',
  lightgray: '#FFEBD9',
  white: '#FFF',
  lightwhite: '#F5F5F5'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.lightwhite};
    color: ${colors.lightred};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
}
`
