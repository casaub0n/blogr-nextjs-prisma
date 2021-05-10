import React, { ComponentProps } from 'react'
import { StyledComponent as Component } from '../components/Layout'
import { Post } from './Post.stories'

export default { title: 'Post' }

type Props = ComponentProps<typeof Component>

const meta: Props = {
  children: Post,
  className: 'layout',
}

export const Layout = () => <Component {...meta} />
