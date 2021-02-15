import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle, css, ThemeProvider } from "styled-components"

import theme from "../theme"

import "sanitize.css" // normalization stylesheet - may affect other styles
import "sanitize.css/reduce-motion.css"

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    ${theme.fonts}

    body {
      ${theme.mixins.body}

      color: ${theme.colors.dark};
      background-color: ${theme.colors.light};

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      ${theme.mixins.heading}

      line-height: 1.2;
    }
  `}
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
