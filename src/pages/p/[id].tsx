import { GetServerSideProps, NextPage } from 'next'
import * as React from 'react'
import { PublishedPost } from '../../components/publishedpost'
import { PostProps } from '../../lib/types/PostProps'
import prisma from '../../lib/prisma'

/**
 * get selected post
 * @param param0
 * @returns
 */
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id) || undefined,
    },
    include: {
      author: {
        select: { name: true, email: true  },
      },
    },
  })

  return {
    props: { post }
  }
}

type ContainerProps = {
  post: PostProps
}

const Container: NextPage<ContainerProps> = (props) => {
  return (
    <PublishedPost {...props} />
  )
}

export default Container
