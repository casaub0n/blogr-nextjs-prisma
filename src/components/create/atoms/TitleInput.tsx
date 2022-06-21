import * as React from 'react'
import styled from 'styled-components'

type Props = {
  className: string
} & ContainerProps

type ContainerProps = JSX.IntrinsicElements['input']

const Component: React.FC<Props> = ({ className }) => {
  return (
    <input className={className} autoFocus type="text" placeholder="Title" />
  )
}

export const StyledComponent = styled(Component)`
  width: 100%;
  border-radius: 0.25rem;
  border: 0.125rem solid rgba(0, 0, 0, 0.2);
`

const Container: React.FC<ContainerProps> = () => {
  return (
    <StyledComponent className="title_input" />
  )
}

export { Container as TitleInput }
