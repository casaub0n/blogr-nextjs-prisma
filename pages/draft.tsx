import { GetServerSideProps } from 'next'
import { getSession, useSession } from 'next-auth/client'
import * as React from 'react'
import Draft from '../components/Draft'
import { ComponentProps } from 'react'
import prisma from '../lib/prisma'

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

type Props = ComponentProps<typeof Draft>

const Container: React.VFC<Props> = ({ drafts }) => {
  const [session] = useSession()

  return (
    <Draft drafts={drafts} login={Boolean(session)} />
  )
}

export default Container
