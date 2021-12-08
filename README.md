# blogr-nextjs-prisma
[![CI](https://github.com/casaub0n/blogr-nextjs-prisma/workflows/CI/badge.svg)](https://github.com/casaub0n/blogr-nextjs-prisma/actions?query=workflow%3A%22Node+CI%22)

This is the minimum CMS is based on [How to Build a Fullstack App with Next.js, Prisma, and PostgreSQL](https://vercel.com/guides/nextjs-prisma-postgres)

## Compoenet catalog
https://casaub0n.github.io/blogr-nextjs-prisma/

## Stack
- Taildwind css
- Google analytics
- Typescript
- Prisma
- Jest
- storybook
- eslint
- prettier
- next-auth

## How to implement
```typescript
// import layer
import * as React from 'react'
import styled from 'styled-components'

// type layer
type ContainerProps = {
  children: React.ReactNode
}
type Props = {
  className: string
} & ContainerProps

// component layer
const Component: React.VFC<Props> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

// style layer
export const StyledComponent = styled(Component)`
  color: #000;
`

// container layer
const Container: React.VFC<ContainerProps> = ({ children, ...props }) => {
  return <StyledComponent className="example" {...props}>{children}</StyledComponent>
}

export default Container
```
