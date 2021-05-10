import React, { ComponentProps } from 'react'
import { StyledComponent as Component } from '../components/Post'

export default { title: 'Post' }

type Props = ComponentProps<typeof Component>

export const meta: Props = {
  id: 1999,
  title: 'Example title',
  author: {
    name: 'Takashi',
    email: 'takashi@example.com'
  },
  content: 'hello world',
  published: 'on',
  className: 'storyPost'
}

export const Post = () => <Component {...meta} />
