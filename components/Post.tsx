import React from 'react'
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
} & ContainerProps

const Component: React.VFC<Props> = ({ className, ...props }) => {
  return (
    <div className={className}>
      <div
        className="post"
        onClick={() => Router.push('/p/[id]', `/p/${props.id}`)}
      >
        <h2>{props.title}</h2>
        <small>By {props.author ? props.author.name : 'Unknow author'}</small>
        {props.content ?
          <ReactMarkdown>
            {props.content}
          </ReactMarkdown>
          : undefined
        }
      </div>
    </div>
  )
}

export const StyledComponent = styled(Component)`
  .post {
    color: inherit;
    padding: 2rem;
  }
`

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />
}

export default Container
