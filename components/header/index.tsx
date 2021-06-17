import * as React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/client'
import Link from 'next/link'
import Bold from './atoms/Bold'
import Left from './atoms/Left'
import Right from './atoms/Right'

export type ContainerProps = {
  componentStatus: {
    loading: boolean
    session: boolean
  }
}

export type User = {
  name?: string | null
  email?: string | null
}

export type Props = {
  className?: string
  handleClick: () => void
} & ContainerProps & { user: User }

// TODO: isActive
const Component: React.VFC<Props> = ({ className, componentStatus, user, ...props }) => {
  const router = useRouter()
  const isActive = (pathname: string) => router.pathname === pathname

  if (componentStatus.loading) {
    return (
      <nav className={className}>
        <Left>
          <Bold ref="/" data-active={isActive('/')}>
            Feed
          </Bold>
        </Left>
        <Right>
          <p>Validating session ...</p>
        </Right>
      </nav>
    )
  }

  if (componentStatus.session) {
    return (
      <nav className={className}>
        <Left>
          <Bold ref="/" data-active={isActive('/')}>
            Feed
          </Bold>
          <Link href="/draft">
            <a data-active={isActive('/draft')}>
              My draft
            </a>
          </Link>
        </Left>
        <Right>
          <p>
            {user.name} ({user.email})
          </p>
          <Link href="/create">
            <button>
              <a>New post</a>
            </button>
          </Link>
          <button onClick={props.handleClick}>
            <a>Log out</a>
          </button>
        </Right>
      </nav>
    )
  }

  if (!componentStatus.session) {
    return (
      <nav className={className}>
        <Left>
          <Bold ref="/" data-active={isActive('/')}>
            Feed
          </Bold>
        </Left>
        <Right>
          <Link href="/api/auth/signin">
            <a data-active={isActive('signup')}>Log in</a>
          </Link>
        </Right>
      </nav>
    )
  }

  return (
    <nav className={className}>
      <Left>
        <Bold ref="/" data-active={isActive('/')}>
          Feed
        </Bold>
      </Left>
    </nav>
  )
}

export const StyledComponent = styled(Component)`
  display: flex;
  padding: 2rem;
  align-items: center;
`

export const Container: React.VFC = () => {
  const [session, loading] = useSession()

  if (session && session.user) {
    const props: Props = {
      componentStatus: {
        loading: loading,
        session: Boolean(session)
      },
      user: {
        email: session.user.email,
        name: session.user.name
      },
      handleClick: () => signOut()
    }

    return <StyledComponent className="header" {...props } />
  }

  const props: Props = {
    componentStatus: {
      loading: loading,
      session: Boolean(session)
    },
    user: {
      email: undefined,
      name: undefined
    },
    handleClick: () => signOut()
  }

  return <StyledComponent className="header" {...props } />
}

export { Container as Header }
