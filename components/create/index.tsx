import * as React from 'react'
import Layout from '../Layout'
import styled from 'styled-components'
import Back from './atoms/Back'

type ContainerProps = {
  title: string
  content: string
  titleEvent: (e: React.ChangeEvent<HTMLInputElement>) => void
  contentEvent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  submitData: (e: React.SyntheticEvent) => void
}

type Props = {
  className: string
} & ContainerProps

const Component: React.VFC<Props> = ({ className, title, titleEvent, content, contentEvent, submitData }) => {
  return (
    <div className={className}>
      <form onSubmit={submitData}>
        <h1>New Draft</h1>
        <input
          autoFocus
          onChange={titleEvent}
          placeholder="Title"
          type="text"
          value={title} />
        <textarea
          cols={50}
          onChange={contentEvent}
          placeholder="Content"
          rows={8}
          value={content}
        />
        <input disabled={!content || !title} type="submit" value="Create" />
        <Back />
      </form>
    </div>
  )
}

export const StyledComponent = styled(Component)`
/*
.page {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
*/
  input[type='text'],
  textarea {
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 0.25rem;
    border: 0.125rem solid rgba(0, 0, 0, 0.2);
  }
  input[type='submit'] {
    background: #ececec;
    border: 0;
    padding: 1rem 2rem;
  }
`

const Container: React.VFC<ContainerProps> = (props) => {
  return <Layout><StyledComponent className="page" {...props} /></Layout>
}

export { Container as Create }
