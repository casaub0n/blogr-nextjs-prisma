import Router from 'next/router'
import * as React from 'react'
import styled from 'styled-components'

type RefProps = JSX.IntrinsicElements['a'] & {
  children: React.ReactNode
  to?: string // TODO: check this!!
}

type Props = {
  className: string
  clickEvent: () => void
} & RefProps

const Component = React.forwardRef<HTMLAnchorElement, Props>(({children, className, clickEvent, to}, ref) => {
  return (
    <a className={className} href={to} onClick={clickEvent} ref={ref}>
      {children}
    </a>
  )
})

export const StyledComponent = styled(Component)`
  margin-left: 1rem;
`

const Container: React.VFC = () => {
  const clickEvent = () => Router.push('/')

  return (
    <a href="#">
      <StyledComponent className="back" clickEvent={clickEvent}>
        or Cancel
      </StyledComponent>
    </a>
  )
}

export default Container
