import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/client'
import * as React from 'react'
import { Id } from '../../components/id'
import { ContainerProps as PostProps } from '../../components/Post'
import prisma from '../../lib/prisma'

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
    props: { post },
  }
}

const Container: React.VFC<PostProps> = props => {
  const [session, loading] = useSession()
  const userHasValidSession = Boolean(session)
  const postBelongsToUser = session?.user?.email === props.author?.email

  return (
    <Id {...props} loading={loading} userHasValidation={userHasValidSession} postBelongsToUser={postBelongsToUser} />
  )
}

export default Container
