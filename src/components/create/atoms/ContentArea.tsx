import * as React from 'react'
import styled from 'styled-components'

type Props = {
  className: string
} & ContainerProps

type ContainerProps = JSX.IntrinsicElements['textarea']

const Component: React.FC<Props> = ({ className }) => {
  return (
    <textarea className={className} cols={50} placeholder="Content" rows={8} />
  )
}

export const StyledComponent = styled(Component)`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 0.25rem;
  border: 0.125rem solid rgba(0, 0, 0, 0.2);
`

const Container: React.FC<ContainerProps> = () => {
  return (
    <StyledComponent className="content" />
  )
}

export { Container as ContentArea }
