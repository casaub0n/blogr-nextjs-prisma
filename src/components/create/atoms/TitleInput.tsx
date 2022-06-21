import * as React from 'react'
import styled from 'styled-components'

type Props = {
  className: string
} & JSX.IntrinsicElements['input']

type ContainerProps = {
  title: string
  titleEvent: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Component: React.FC<Props> = ({ className }) => {
  return (
    <input className={className} autoFocus type="text" />
  )
}

export const StyledComponent = styled(Component)``

const Container: React.FC<ContainerProps> = ({ title, titleEvent }) => {
  return (
    <StyledComponent className="title_input" value={title} onChange={titleEvent} placeholder="Title" />
  )
}

export { Container as TitleInput }
