import Router from 'next/router'
import * as React from 'react'
import styled from 'styled-components'

type Props = {
  className: string
  clickEvent: () => void
  children: React.ReactNode
  href: string
} & JSX.IntrinsicElements['a']

const Component: React.FC<Props> = ({children, className, clickEvent, href, ...props}) => {
  return (
    <a className={className} href={href} onClick={clickEvent} {...props}>
      {children}
    </a>
  )
}

export const StyledComponent = styled(Component)`
  margin-left: 1rem;
`

const Container: React.FC = () => {
  const clickEvent = () => Router.push('/')

  return (
    <StyledComponent className="back" clickEvent={clickEvent} href="#">
      or Cancel
    </StyledComponent>
  )
}

export default Container
