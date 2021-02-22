import React from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

export type PostProps = {
  id: number
  title: string
  author: {
    name: string
    email: string
  } | null
  content: string
  published: string
}

type Props = {
  onClick: () => void
} & PostProps

const Component: React.FC<Props> = props => {
  return (
    <div className="post" onClick={props.onClick}>
      <h2>{props.title}</h2>
      <small>By {props.author ? props.author.name : "Unknow author"}</small>
      <ReactMarkdown children={props.content} />
    </div>
  )
}

const StyledComponent = styled(Component)`
  .post {
    color: inherit;
    padding: 2rem;
  }
`

const Container: React.FC<PostProps> = props => {
  return (
    <StyledComponent
      {...props}
      onClick={() => Router.push("/p/[id]", `/p/${props.id}`)}
    />
  )
}

export default Container
