import { useSession } from 'next-auth/react'
import * as React from 'react'
import styled from 'styled-components'

import { PostProps } from '../lib/types/PostProps'
import Post from './Post'

type Props = {
  className: string
  children?: React.ReactNode
  login: true | false
}

type ContainerProps = {
  drafts: PostProps[]
}

const Component: React.FC<Props> = ({ className, children, login }) => {
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

const Container: React.FC<ContainerProps> = ({ drafts }) => {
  const { data: session } = useSession()

  return (
    <StyledComponent className="page" login={Boolean(session)}>
      {drafts.map((post) => (
        <div key={post.id} className="post">
          <Post {...post} />
        </div>
      ))}
    </StyledComponent>
  )
}

export default Container
