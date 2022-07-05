import clsx from 'clsx'
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
    <div className={clsx(className, 'text-nord3 border-nord3')}>
      {children}
    </div>
  )
}

export const StyledComponent = styled(Component)`
    margin-left: auto;

    & a {
      text-decoration: none;
      /* color: #000; */
      display: inline-block;
      /* border: 1px solid black; */
      border: 1px solid;
      padding: 0.5em 1rem;
      border-radius: 3px;
    }

    & p {
      display: inline-block;
      font-size: 13px;
      padding-right: 1rem;
    }

    a + a {
      margin-left: 1rem;
    }

    & button {
      border: none;
    }
`

const Container: React.FC<ContainerProps> = ({children}) => {
  return <StyledComponent className="right">{children}</StyledComponent>
}

export default Container
