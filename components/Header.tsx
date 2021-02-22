import styled from 'styled-components'
import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  isActive: boolean
}

const Component: React.FC<Props> = props => (
  <nav>
    <div className="left">
      <Link href="/">
        <a className="bold" data-active={props.isActive}>
          Feed
        </a>
      </Link>
    </div>
  </nav>
)

const StyledComponent = styled(Component)`
  .bold {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: #000;
    display: inline-block;
  }

  .left a[data-active="true"] {
    color: gray;
  }

  a + a {
    margin-left: 1rem;
  }

  nav {
    display: flex;
    padding: 2rem;
    align-items: center;
  }
`

const Container: React.FC<Props> = (props) => {
  const router = useRouter()
  const isActive: (pathname: string) => boolean = (pathname) =>
  router.pathname === pathname

  return (
    <StyledComponent {...props} data-active={isActive("/")} />
  )
}

export default Container
