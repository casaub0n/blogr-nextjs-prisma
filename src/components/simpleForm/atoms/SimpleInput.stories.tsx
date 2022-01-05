import { Meta, Story } from '@storybook/react'
import React, { ComponentProps } from 'react'

import { Component } from './SimpleInput'

export default {
  title: 'Simple Input',
  component: Component,
} as Meta

type Props = ComponentProps<typeof Component>

const Template: Story<Props> = args => <Component {...args} />

export const Default = Template.bind({})
Default.args = {
  lmessage: "Full name",
  type: "text"
}

export const Error = Template.bind({})
Error.args = {
  lmessage: "Full name",
  type: "text",
  error: "Please put in here"
}
