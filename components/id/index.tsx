import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { ContainerProps as PostProps } from '../../components/Post'
import Layout from '../Layout'
import DeleteButton from './atoms/DeleteButton'
import PublishButton from './atoms/PublishButton'

type ContainerProps = {
  loading: boolean
  userHasValidation: boolean
  postBelongsToUser: boolean
} & PostProps

type Props = {
  className: string
} & ContainerProps

const Component: React.VFC<Props> = ({className, loading, userHasValidation, postBelongsToUser, ...props}) => {
  if (loading) {
    return <div className={className}>Authenticating ...</div>
  }

  return (
    <Layout>
      <div className={className}>
        <h2>{!props.published ? `${props.title} (Draft)` : props.title}</h2>
        <p>By {props?.author?.name || "Unknown author"}</p>
        {props.content ?
          <ReactMarkdown>{props.content}</ReactMarkdown>
        : undefined}
        {!props.published && userHasValidation && postBelongsToUser && (
          <PublishButton id={props.id} />
        )}
        {userHasValidation && postBelongsToUser && (
          <DeleteButton id={props.id} />
        )}
      </div>
    </Layout>
  )
}

export const StyledComponent = styled(Component)`
  .page {
    background: white;
    padding: 2rem;
  }

  .actions {
    margin-top: 2rem;
  }

  button {
    background: #ececec;
    border:0;
    border-radius: 0.125rem;
    padding: 1rem 2rem;
  }

  button + button {
    margin-left: 1rem;
  }
`

export const Container: React.VFC<ContainerProps> = (props) => {
  return (
    <StyledComponent className="page" {...props} />
  )
}

export { Container as Id }
