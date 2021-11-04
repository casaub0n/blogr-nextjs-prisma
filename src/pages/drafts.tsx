import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/client'
import * as React from 'react'
import Draft from '../components/Draft'
import prisma from '../lib/prisma'
import { PostProps } from '../lib/types/PostProps'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req })
  if (!session) {
    res.statusCode = 403
    return { props: { drafts: [] } }
  }

  const drafts = await prisma.post.findMany({
    where: {
      author: { email: session.user?.email },
      published: false
    },
    include: {
      author: {
        select: { name: true },
      }
    }
  })

  return {
    props: { drafts }
  }
}

// TODO: maybe export to lib
type ContainerProps = {
  drafts: PostProps[]
}

const Container: NextPage<ContainerProps> = (props) => {
  return (
    <Draft {...props} />
  )
}

export default Container
