import * as React from 'react'
import styled from 'styled-components'

import { Header } from './header'

type IProps = {
  children?: React.ReactNode
  // className?: string
}

const Component: React.VFC<IProps> = ({ children }) => (
  <>
    <Header />
    {/* container */}
    <section className="container w-full md:max-x-3xl mx-auto pt-50">
      {children}
    </section>
    {/* /container */}
  </>
)

export const StyledComponent = styled(Component)``

const Container: React.VFC<IProps> = ({ children }) => {
  return (
    <StyledComponent>
      {children}
    </StyledComponent>
  )
}

export default Container
