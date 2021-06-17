import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'

type RefProps = JSX.IntrinsicElements['a'] & {
  children: React.ReactNode
  dataActive?: string
}

type Props = {
  className: string
} & RefProps

type ContainerProps = {
  ref: string
} & RefProps

const Component = React.forwardRef<HTMLAnchorElement, Props>(({children, className, dataActive, ...props}, ref) => {
  return (
    <a className={className} ref={ref} {...props} data-active={dataActive}>
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

const Container: React.VFC<ContainerProps> = ({ref, children, dataActive, ...props}) => {
  return (
    <Link href={ref}>
      <StyledComponent className="bold" data-active={dataActive} {...props}>
        {children}
      </StyledComponent>
    </Link>
  )
}

export default Container
