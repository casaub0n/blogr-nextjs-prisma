import Router from 'next/router'
import * as React from 'react'
import styled from 'styled-components'

type ContainerProps = {
  id: number
}

type Props = {
  className: string
  id: number
  handleClickEvent: (id: number) => Promise<void>
} & ContainerProps

const Component: React.VFC<Props> = ({className, id, handleClickEvent}) => {
  return (
    <button className={className} onClick={() => handleClickEvent(id)}>Publish</button>
  )
}

export const StyledComponent = styled(Component)`
  background: #ececec;
  border:0;
  border-radius: 0.125rem;
  padding: 1rem 2rem;
`

async function publishPost(id: number): Promise<void> {
  await fetch(`http://localhost:3000/api/publish/${id}`, {
    method: 'PUT',
  })
  await Router.push('/')
}

const Container: React.VFC<ContainerProps> = ({ id }) => {
  return (
    <StyledComponent className="publish_button" handleClickEvent={publishPost} id={id} />
  )
}

export default Container
