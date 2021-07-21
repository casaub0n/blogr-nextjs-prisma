import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Header } from './header'

/**
 * TODO: not good
 */
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    background-color: rgba(0, 0, 0, 0.05);
  }

  input,
  textarea {
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`

type IProps = {
  children?: React.ReactNode
  className?: string
}

const Component: React.VFC<IProps> = ({ children, className }) => (
  <div className={className}>
    <Header />
    <div className="layout">{children}</div>
    <GlobalStyle />
  </div>
)

export const StyledComponent = styled(Component)`
  .layout {
    padding: 0.2rem;
  }
`

const Container: React.VFC<IProps> = ({ children }) => {
  return (
    <StyledComponent>
      {children}
    </StyledComponent>
  )
}

export default Container
