# blogr-nextjs-prisma
This is a boilerplate.
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
At first, component, style and container layer has only one dependency.

the component dependency is type layer.

the style dependency is component layer.

the container dependency is style layer.

moreover, 
