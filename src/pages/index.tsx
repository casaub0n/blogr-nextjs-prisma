import { GetServerSideProps, NextPage } from 'next'
import * as React from 'react'
import styled from 'styled-components'

import { Layout } from '../components/Layout'
import Post from '../components/Post'
import prisma from '../lib/prisma'
import { PostProps } from '../lib/types/PostProps'

export const getStaticProps: GetServerSideProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  })
  return { props: { feed } }
}

type ContainerProps = {
  feed: PostProps[]
}

type Props = {
  className: string
} & ContainerProps

const Component: React.FC<Props> = ({...props}) =>
  (
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
  )

const StyledComponent = styled(Component)`
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

const Container: NextPage<Props> = ({...props}) => {
  return (
    <Layout>
      <StyledComponent {...props} />
    </Layout>
  )
}

export default Container
