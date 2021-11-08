import { Meta, Story } from '@storybook/react'
import React, { ComponentProps } from 'react'

import { StyledComponent as Component } from './Bold'

type Props = ComponentProps<typeof Component>

export default {
  title: 'Bold button',
  component: Component,
  argTypes: {
    href: {
      description: 'link'
    },
    className: {
      description: 'class name for html'
    },
    children: {
      description: 'Only strings'
    }
  }
} as Meta<Props>

const Template: Story<Props> = args => <Component {...args} />

export const Default = Template.bind({})
Default.args = {
  href: "http://example.com/",
  className: "bold",
  children: "Feed"
}

export const DataActive = Template.bind({})
DataActive.args = {
  href: "http://example.com/",
  className: "bold",
  children: "Feed",
  dataActive: "true"
}
