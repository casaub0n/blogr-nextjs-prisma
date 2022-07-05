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

const Component: React.FC<Props> = ({className, to, dataActive, children}) => {
  return (
    <a className={className} href={to} data-active={dataActive}>
      {children}
    </a>
  )
}

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

const Container: React.VFC<ContainerProps> = ({ to, children, dataActive }) => {
  return (
    <Link href={to} passHref>
      <StyledComponent className="bold" data-active={dataActive} to={to}>
        {children}
      </StyledComponent>
    </Link>
  )
}

export default Container
