import * as React from 'react'
import styled from 'styled-components'

type ContainerProps = {
  children: React.ReactNode
}

type Props = {
  className: string
} & ContainerProps

const Component: React.FC<Props> = ({className, children}) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export const StyledComponent = styled(Component)`
  & a {
    text-decoration: none;
    color: #000;
    display: inline-block;
  }

  & a[data-active='true'] {
    color: gray;
  }

  a + a {
    margin-left: 1rem;
  }
`

const Container: React.FC<ContainerProps> = ({children}) => {
  return <StyledComponent className="left">{children}</StyledComponent>
}

export default Container
