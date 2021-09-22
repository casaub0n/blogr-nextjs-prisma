import React, { ComponentProps } from 'react'
import { StyledComponent as Component } from '../components/Layout'
import { StyledComponent as Post } from '../components/Post'

// eslint-disable-next-line import/no-anonymous-default-export
export default { title: 'LayOut' }

type PostProps = ComponentProps<typeof Post>

const post: PostProps = {
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

const MetaPost: React.VFC = () => <Post {...post} />

type Props = ComponentProps<typeof Component>

const meta: Props = {
  children: MetaPost,
  className: 'layout',
}

export const Layout:React.VFC = () => <Component {...meta} />
