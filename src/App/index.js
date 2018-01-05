import React from 'react'
import { injectGlobal } from 'styled-components'
import { theme } from './constants/theme'

injectGlobal`
  html, body {
    font-size: ${theme.BaseFont};
    font-family: ${theme.fontFamily};
    background-color: ${theme.color.bg};
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default () => <div>FIVEFRETS</div>
