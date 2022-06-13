# blogr-nextjs-prisma
[![CI](https://github.com/casaub0n/blogr-nextjs-prisma/workflows/CI/badge.svg)](https://github.com/casaub0n/blogr-nextjs-prisma/actions?query=workflow%3A%22Node+CI%22)

This is the minimum CMS is based on [How to Build a Fullstack App with Next.js, Prisma, and PostgreSQL](https://vercel.com/guides/nextjs-prisma-postgres)

The best DX actual next.js project

## Compoenet catalog
https://casaub0n.github.io/blogr-nextjs-prisma/

## Stack
- Tailwind CSS
- Typescript
- Prisma
- Jest
- Storybook
- eslint
- prettier
- next-auth

### Tailwind CSS
The default theme is [nord theme](https://www.nordtheme.com/). You can change to edit on `tailwind.config.js`.

### Prisma
Prisma has a strong type system and a frendly editor.
#### TODO
- [ ] WIP service layer
- [ ] integration test

### Jest
Because of unit test. The environment is under jsdom.
#### TODO
- [ ] MSW

### Storybook
This project's storybook is still webpack4 because of dependency of PostCSS.
Right now, preview.js is not good work, so it extends webpack configuration.

### GitHub actions

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
