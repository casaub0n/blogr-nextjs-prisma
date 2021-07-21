import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'

type RefProps = JSX.IntrinsicElements['a'] & {
  children: React.ReactNode
  dataActive?: string
  to?: string // TODO: check this!!
}

type Props = {
  className: string
} & RefProps

type ContainerProps = {
  to: string
  children: React.ReactNode
  dataActive?: string
}

const Component = React.forwardRef<HTMLAnchorElement, Props>(({children, className, dataActive, to}, ref) => {
  return (
    <a className={className} href={to} data-active={dataActive} ref={ref}>
      {children}
    </a>
  )
})

export const StyledComponent = styled(Component)`
  font-weight: bold;

  & a {
    text-decoration: none;
    color: #000;
    display: inline-block;
  }

  &[data-active="true"] {
    color: gray;
  }
`

const Container: React.VFC<ContainerProps> = ({ to, children, dataActive, ...props }) => {
  return (
    <Link href={to} passHref {...props}>
      <StyledComponent className="bold" data-active={dataActive}>
        {children}
      </StyledComponent>
    </Link>
  )
}

export default Container
