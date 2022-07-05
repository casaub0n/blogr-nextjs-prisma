import Router from 'next/router'
import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

import { PostProps } from '../lib/types/PostProps'

export type Props = {
  className?: string
  clickEvent: () => void
} & PostProps

const Component: React.FC<Props> = ({clickEvent, ...props }) => {
  return (
    <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" onClick={clickEvent}>
      <div className="font-sans">
        <h2 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">{props.title}</h2>
      </div>
      <small className="text-sm md:text-base font-normal text-gray-600">By {props.author ? props.author.name : 'Unknow author'}</small>
      {props.content ?
        <ReactMarkdown>
          {props.content}
        </ReactMarkdown>
        : undefined
      }
    </div>
  )
}

// export const StyledComponent = styled(Component)`
//   color: inherit;
//   padding: 2rem;
// `

export const StyledComponent = styled(Component)``

const Container: React.FC<PostProps> = (props) => {
  const clickEvent = () => Router.push('/p/[id]', `/p/${props.id}`)

  return (
    <StyledComponent className="post" clickEvent={clickEvent} {...props} />
  )
}

export default Container
