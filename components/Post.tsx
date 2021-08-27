import * as React from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

export type ContainerProps = {
  id: number
  title?: string
  author?: {
    name: string
    email: string
  } | null
  content?: string
  published?: string
}

export type Props = {
  className?: string
  clickEvent: () => void
} & ContainerProps

const Component: React.VFC<Props> = ({ className, clickEvent, ...props }) => {
  return (
    <div className={className} onClick={clickEvent}>
      <h2>{props.title}</h2>
      <small>By {props.author ? props.author.name : 'Unknow author'}</small>
      {props.content ?
        <ReactMarkdown>
          {props.content}
        </ReactMarkdown>
        : undefined
      }
    </div>
  )
}

export const StyledComponent = styled(Component)`
  color: inherit;
  padding: 2rem;
`

const Container: React.VFC<ContainerProps> = (props) => {
  const clickEvent = () => Router.push('/p/[id]', `/p/${props.id}`)

  return (
    <StyledComponent className="post" clickEvent={clickEvent} {...props} />
  )
}

export default Container
