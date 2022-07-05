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

const Component: React.VFC<Props> = ({className, id, handleClickEvent}) => {
  return (
    <button className={className} onClick={() => handleClickEvent(id)}>Delete</button>
  )
}

export const StyledComponent = styled(Component)`
  background: #ececec;
  border:0;
  border-radius: 0.125rem;
  padding: 1rem 2rem;
`

/**
 * delete post
 * @param id of post
 */
const deletePost = async (id: string): Promise<void> => {
  await fetch(`${process.env.API}/api/post/${id}`, {
    method: 'DELETE'
  })
  Router.push('/')
}

const Container: React.FC<ContainerProps> = ({ id }) => {
  return (
    <StyledComponent className="delete_button" handleClickEvent={deletePost} id={id} />
  )
}

export default Container
