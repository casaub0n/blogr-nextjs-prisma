import * as React from 'react'
import styled from 'styled-components'
import Layout from './Layout'
import Post from './Post'

type Post = {
  id: number
}

type Props = {
  className: string
  children?: React.ReactNode
  login: true | false
}

type ContainerProps = {
  drafts: [Post],
  login: true | false
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

const Container: React.VFC<ContainerProps> = ({ drafts, login }) => {
  return (
    <Layout>
      <StyledComponent className="page" login={login}>
        {drafts.map((post) => (
          <div key={post.id} className="post">
            <Post id={post.id} />
          </div>
        ))}
      </StyledComponent>
    </Layout>
  )
}

export default Container
