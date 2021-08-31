# blogr-nextjs-prisma
This is a boilerplate.

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

## How to implement
Technically  5 layers strategy that is this way
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

### Why should we follow this way?
Under type layer, component, style and container layer has only a lower dependency.

the component layer depends on the type layer.

the style layer dependency depends on the component layer.

the container layer depends on the style layer.


This way is adopted, thereby improving 
