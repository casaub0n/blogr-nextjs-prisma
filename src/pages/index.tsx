import * as React from 'react'
import Layout from '../components/Layout'
import { GetServerSideProps } from 'next'
import prisma from '../lib/prisma'
import Post, { ContainerProps as PostProps } from '../components/Post'
import styled from 'styled-components'
import logger from '../lib/logger'
import { pino as onlyPino } from 'pino'

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

const Component: React.VFC<Props> = ({...props}) =>
  (
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

const Container: React.VFC<Props> = ({...props}) => {
  // Logging to pino-logflare.
  // Will get sent to Logflare via HTTP.
  logger.info("Client side logging. Logged with pino-logflare.")

  // Logging with pino.
  // Will appear only in the console of the client.
  onlyPino().info("Client side logging. Logged with pino.")

  return (
    <StyledComponent
      {...props}
    />
  )
}

export default Container
