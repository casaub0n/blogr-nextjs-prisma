import * as React from 'react'
import styled from 'styled-components'

type Props = {
  className: string
} & JSX.IntrinsicElements['textarea']

type ContainerProps = {
  content: string
  contentEvent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Component: React.FC<Props> = ({ className }) => {
  return (
    <textarea className={className} cols={50} placeholder="Content" rows={8} />
  )
}

export const StyledComponent = styled(Component)`
  textarea {
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 0.25rem;
    border: 0.125rem solid rgba(0, 0, 0, 0.2);
  }
`

const Container: React.FC<ContainerProps> = ({ content, contentEvent }) => {
  return (
    <StyledComponent className="content" value={content} onChange={contentEvent} />
  )
}

export { Container as ContentArea }
