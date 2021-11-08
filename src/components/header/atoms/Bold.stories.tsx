import { Meta, Story } from '@storybook/react'
import React, { ComponentProps } from 'react'

import { StyledComponent as Component } from './Bold'

export default {
  title: 'Bold button',
  component: Component,
} as Meta

type Props = ComponentProps<typeof Component>

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
