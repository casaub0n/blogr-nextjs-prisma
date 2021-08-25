import * as React from 'react'
import { Create } from '../components/create'

const Container: React.VFC = () => {
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
    } catch (error) {
      console.error(error)
    }
  }

  return <Create title={title} titleEvent={titleEvent} content={content} contentEvent={contentEvent} submitData={submitData} />
}

export default Container
