import styled from 'styled-components'
import * as React from 'react'
import Link from 'next/link'

type Props = {
  location: string
}

const Component: React.FC<Props> = props => (
  <header className="site-header">
    <div className="site-header-wrapper">
      <Link href={props.location}><a className="brand">{props.children}</a></Link>
      <div className="search" />
      <nav className="nav" />
      <Link href="#"><a className="button">Track</a></Link>
    </div>
  </header>
)

const StyledComponent = styled(Component)`
  &.site-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &.site-header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &.search {
    fles: 1;
  }
`

export default StyledComponent
