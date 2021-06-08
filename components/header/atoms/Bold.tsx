import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'

type Props = {
  className: string
  children: React.ReactNode
}

const Component = React.forwardRef<HTMLAnchorElement, Props>(({children, className}, ref) => {
  return (
    <a className={className} ref={ref}>
      {children}
    </a>
  )
})

export const StyledComponent = styled(Component)`
  font-weight: bold;
`

const Container: React.VFC = () => {
  return (
    <Link href="/">
      <StyledComponent className="bold">
        Feed
      </StyledComponent>
    </Link>
  )
}

export default Container
