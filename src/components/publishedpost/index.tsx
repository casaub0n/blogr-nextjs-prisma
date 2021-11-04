import clsx from 'clsx'
import { useSession } from 'next-auth/client'
import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import type { PostProps } from '../../lib/types/PostProps'
import Layout from '../Layout'
import DeleteButton from './atoms/DeleteButton'
import PublishButton from './atoms/PublishButton'

type Props = {
  className: string
  loading: boolean
  userHasValidation: boolean
  postBelongsToUser: boolean
} & PostProps

const Component: React.VFC<Props> = ({ className, loading, userHasValidation, postBelongsToUser, published, title, author, content, id }) => {
  if (loading) {
    return <div className={className}>Authenticating ...</div>
  }

  return (
    <Layout>
      <div className={clsx('w-full px-4 md:px-6 text-xl text-gray-800 leading-normal')}>
        <div className="font-sans">
          <h2 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">{!published ? `${title} (Draft)` : title}</h2>
        </div>
        <small className="text-sm md:text-base font-normal text-gray-600">By {author?.name || "Unknown author"}</small>
        {content ?
          <ReactMarkdown>{content}</ReactMarkdown>
        : undefined}
        {!published && userHasValidation && postBelongsToUser && (
          <PublishButton id={id} />
        )}
        {userHasValidation && postBelongsToUser && (
          <DeleteButton id={id} />
        )}
      </div>
    </Layout>
  )
}

export const StyledComponent = styled(Component)`
  /* .page {
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
  } */
`

type ContainerProps = {
  post: PostProps
}

export const Container: React.VFC<ContainerProps> = (props) => {
  const [session, loading] = useSession()
  const userHasValidSession = Boolean(session)
  const { post } = props
  const postBelongsToUser = session?.user?.email === post.author?.email

  console.log(props)
  console.log(post.author)
  console.log(post.author?.email)

  return (
    <StyledComponent className="page" loading={loading} userHasValidation={userHasValidSession} postBelongsToUser={postBelongsToUser} published={post.published} title={post.title} author={post.author} content={post.content} id={post.id} />
  )
}

export { Container as PublishedPost }
