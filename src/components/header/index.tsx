import Link from 'next/link'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'
import * as React from 'react'
import styled from 'styled-components'

import Bold from './atoms/Bold'
import Left from './atoms/Left'
import Right from './atoms/Right'

export type User = {
  name?: string | null
  email?: string | null
}

export type Props = {
  className?: string
  handleClick: () => void
  session: boolean
  loading: boolean
  isActive: (pathname: string) => boolean
} & { user: User }

const Component: React.FC<Props> = ({ className, user, session, loading, isActive, ...props }) => {

  if (loading) {
    return (
      <nav className={className}>
        <Left>
          <Bold to="/" data-active={isActive('/')}>
            Feed
          </Bold>
        </Left>
        <Right>
          <p>Validating session ...</p>
        </Right>
      </nav>
    )
  }

  if (session) {
    return (
      <nav className={className}>
        <Left>
          <Bold to="/" data-active={isActive('/')}>
            Feed
          </Bold>
          <Link href="/drafts">
            <a data-active={isActive('/drafts')}>
              My draft
            </a>
          </Link>
        </Left>
        <Right>
          <p>
            {user.name} ({user.email})
          </p>
          <Link href="/create" passHref>
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

  if (!session) {
    return (
      <nav className={className}>
        <Left>
          <Bold to="/" data-active={isActive('/')}>
            Feed
          </Bold>
        </Left>
        <Right>
          <Link href="/api/auth/signin">
            <a data-active={isActive('/signup')}>Log in</a>
          </Link>
        </Right>
      </nav>
    )
  }

  return (
    <nav className={className}>
      <Left>
        <Bold to="/" data-active={isActive('/')}>
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

export const Container: React.FC = () => {
  // https://next-auth.js.org/getting-started/client
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  const user={email: session?.user?.email, name: session?.user?.name}
  const router = useRouter()
  const isActive = (pathname: string) => router.pathname === pathname

  return <StyledComponent className="header" session={Boolean(session)} loading={loading} handleClick={() => signOut()} user={user} isActive={isActive} />
}

export { Container as Header }
