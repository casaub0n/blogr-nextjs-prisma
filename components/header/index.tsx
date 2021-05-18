import * as React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/client'
import Link from 'next/link'

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
  isActive: (pathName: string) => boolean
  handleClick: () => void
} & ContainerProps & { user: User }

const Component: React.VFC<Props> = ({ className, componentStatus, user, ...props }) => {
  if (componentStatus.loading) {
    return (
      <nav className={className}>
        <div className="left">
          <Link href="/">
            <a className="bold" data-active={props.isActive}>
              Feed
            </a>
          </Link>
        </div>
        <div className="right">
          <p>Validating session ...</p>
        </div>
      </nav>
    )
  }

  // TODO: signOut
  if (componentStatus.session) {
    return (
      <nav className={className}>
        <div className="left">
          <Link href="/">
            <a className="bold" data-active={props.isActive}>
              Feed
            </a>
          </Link>
          <Link href="/draft">
            <a data-active={props.isActive}>
              My draft
            </a>
          </Link>
        </div>
        <div className="right">
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
        </div>
      </nav>
    )
  }

  if (!componentStatus.session) {
    return (
      <nav className={className}>
        <div className="left">
          <Link href="/">
            <a className="bold" data-active={props.isActive}>
              Feed
            </a>
          </Link>
        </div>
        <div className="right">
          <Link href="/api/auth/signin">
            <a data-active={props.isActive}>Log in</a>
          </Link>
        </div>
      </nav>
    )
  }

  return (
    <nav className={className}>
      <div className="left">
        <Link href="/">
          <a className="bold" data-active={props.isActive}>
            Feed
          </a>
        </Link>
      </div>
    </nav>
  )
}

export const StyledComponent = styled(Component)`
  display: flex;
  padding: 2rem;
  align-items: center;

  .right {
    margin-left: auto;

    a {
      text-decoration: none;
      color: #000;
      display: inline-block;
    }

    p {
      display: inline-block;
      font-size: 13px;
      padding-right: 1rem;
    }

    a + a {
      margin-left: 1rem;
    }
  }

  .right a {
    border: 1px solid black;
    padding: 0.5rem 1rem;
    border-radius: 3px;
  }

  button {
    border: none;
  }

  .left {
    .bold {
      font-weight: bold;
    }

    & a {
      text-decoration: none;
      color: #000;
      display: inline-block;
    }

    a[data-active='true'] {
      color: gray;
    }

    a + a {
      margin-left: 1rem;
    }
  }
`

export const Container: React.VFC = () => {
  const router = useRouter()
  const [session, loading] = useSession()

  const props: Props = {
    componentStatus: {
      loading: loading,
      session: Boolean(session)
    },
    user: {
      email: session?.user.email,
      name: session?.user.name
    },
    isActive: (pathName) => router.pathname === pathName,
    handleClick: () => signOut()
  }

  return <StyledComponent {...props } />
}

export { Container as Header }
