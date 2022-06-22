import { Meta, Story } from '@storybook/react'
import React, { ComponentProps } from 'react'

import { LayoutSection } from './LayoutSection'
import { StyledComponent as Post } from './Post'

export default {
  title: 'Layout',
  component: LayoutSection,
} as Meta

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

const Template: Story = () => <LayoutSection><Post {...post} /></LayoutSection>

export const Default = Template.bind({})
