import * as React from 'react'
import styled from 'styled-components'

import { PostProps } from '../lib/types/PostProps'
import Layout from './Layout'
import Post from './Post'

type ContainerProps = {
  feed: PostProps[]
}

type Props = {
  className: string
} & ContainerProps

export const Component: React.VFC<Props> = ({...props}) => {
  return (
    <Layout>
      <div className="page">
        <h1>Public Feed</h1>
        <main>
          {props.feed.map((post) => (
            <div key={post.id} className="post">
              {/* TODO */}
              <Post id={post.id} title={post.title} author={post.author} content={post.content} published={post.published} />
            </div>
          ))}
        </main>
      </div>
    </Layout>
  )
}

export const StyledComponent = styled(Component)`
  h1 {
    color: red;
  }

  .post {
    background: white;
    transition: box-shadow 0.1s ease-in;
  }

  .post:hover {
    box-shadow: 1px 1px 3px #aaa;
  }

  .post + .post {
    margin-top: 2rem;
  }
`

export { StyledComponent as IndexPage }
