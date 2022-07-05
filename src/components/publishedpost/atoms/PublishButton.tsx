import Router from 'next/router'
import * as React from 'react'
import styled from 'styled-components'

type ContainerProps = {
  id: string
}

type Props = {
  className: string
  id: string
  handleClickEvent: (id: string) => Promise<void>
} & ContainerProps

const Component: React.FC<Props> = ({className, id, handleClickEvent}) => {
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

/**
 * publish post
 * @param id of post
 */
const publishPost = async (id: string): Promise<void> => {
  await fetch(`${process.env.API}/api/publish/${id}`, {
    method: 'PUT',
  })
  await Router.push('/')
}

const Container: React.FC<ContainerProps> = ({ id }) => {
  return (
    <StyledComponent className="publish_button" handleClickEvent={publishPost} id={id} />
  )
}

export default Container
