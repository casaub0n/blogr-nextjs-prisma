import * as React from 'react'
import styled from 'styled-components'

type Props = {
  className: string
} & JSX.IntrinsicElements['input']

type ContainerProps = {
  content?: string
  title?: string
}

const Component: React.FC<Props> = ({ className }) => {
  return (
    <input className={className} type="submit" value="Create" />
  )
}

export const StyledComponent = styled(Component)`
  background: #ececec;
  border: 0;
  padding: 1rem 2rem;
`

// TODO: disable
const Container: React.FC<ContainerProps> = ({ content, title }) => {
  return (
    <StyledComponent className="submit_button" disabled={!content || !title} />
  )
}

export { Container as SubmitButton }
