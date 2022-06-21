import Router from 'next/router'
import * as React from 'react'
import styled from 'styled-components'

import Layout from '../Layout'
import Back from './atoms/Back'
import { ContentArea } from './atoms/ContentArea'
import { SubmitButton } from './atoms/SubmitButton'
import { TitleInput } from './atoms/TitleInput'

type Props = {
  className: string
  children: React.ReactNode
  submitData: (e: React.SyntheticEvent) => void
}

const Component: React.FC<Props> = ({ className, submitData, children }) => {
  return (
    <div className={className}>
      <form onSubmit={submitData}>
        <h1>New Draft</h1>
        {children}
      </form>
    </div>
  )
}

export const StyledComponent = styled(Component)`
  background: white;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container: React.FC = () => {
  const [title, setTitle] = React.useState('')
  const titleEvent = (e: React.ChangeEvent<HTMLInputElement>): void => {
    return setTitle(e.target.value)
  }

  const [content, setContent] = React.useState('')
  const contentEvent = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    return setContent(e.target.value)
  }

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { title, content }
      await fetch('/api/post', {
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      await Router.push('/drafts')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Layout>
      <StyledComponent className="page" submitData={submitData}>
        <TitleInput title={title} titleEvent={titleEvent} />
        <ContentArea content={content} contentEvent={contentEvent} />
        <SubmitButton content={content} title={title} />
        <Back />
      </StyledComponent>
    </Layout>
  )
}

export { Container as Create }
