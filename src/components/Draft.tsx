import { useSession } from 'next-auth/client'
import * as React from 'react'
import styled from 'styled-components'

import { PostProps } from '../lib/types/PostProps'
import Layout from './Layout'
import Post from './Post'

type Props = {
  className: string
  children?: React.ReactNode
  login: true | false
}

type ContainerProps = {
  drafts: PostProps[]
}

const Component: React.VFC<Props> = ({ className, children, login }) => {
  return (
    <div className={className}>
      <h1>My Drafts</h1>
      {login ?
        <main>
          {children}
        </main>
      : <div>You need to be authenticated to view this page.</div>
      }
    </div>
  )
}

export const StyledComponent = styled(Component)``

const Container: React.VFC<ContainerProps> = ({ drafts }) => {
  const [session] = useSession()

  return (
    <Layout>
      <StyledComponent className="page" login={Boolean(session)}>
        {drafts.map((post) => (
          <div key={post.id} className="post">
            <Post {...post} />
          </div>
        ))}
      </StyledComponent>
    </Layout>
  )
}

export default Container
