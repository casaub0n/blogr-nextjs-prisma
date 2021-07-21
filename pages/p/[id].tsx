import { GetServerSideProps } from 'next'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import { ContainerProps as PostProps } from '../../components/Post'
import prisma from '../../lib/prisma'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params?.id) || -1,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  })

  return {
    props: { post },
  }
}

type Props = {
  flag: boolean
  className: string
} & PostProps

const Component: React.VFC<Props> = ({className, ...props}) => (
    <Layout>
      <div className={className}>
        <h2>{props.flag ? `${props.title} (Draft)` : props.title}</h2>
        <p>By {props?.author?.name || "Unknown author"}</p>
        {/* I changed \"source\" as an element of ReactMarkdown because of deprecated */}
        <ReactMarkdown>{props.content}</ReactMarkdown>
      </div>
    </Layout>
  )

const StyledComponent = styled(Component)`
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

const Container: React.VFC<PostProps> = props => {
  const flag = !props.published
  return (
    <StyledComponent
      className="page"
      {...props}
      flag={flag}
    />
  )
}

export default Container
