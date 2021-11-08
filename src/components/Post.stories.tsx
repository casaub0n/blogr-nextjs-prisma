import { Meta, Story } from '@storybook/react'
import React, { ComponentProps } from 'react'

import { StyledComponent as Component } from './Post'

export default {
  title: 'Post',
  component: Component
} as Meta

type Props = ComponentProps<typeof Component>

const Template: Story<Props> = args => <Component {...args} />

export const Default = Template.bind({})
Default.args = {
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

