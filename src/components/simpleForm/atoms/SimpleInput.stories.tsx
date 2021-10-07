import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import { Component } from './SimpleInput'

export default {
  title: 'Simple Input',
  component: Component,
} as Meta

type Props = ComponentProps<typeof Component>

const Template: Story<Props> = args => <Component {...args} />

export const Default = Template.bind({})
Default.args = {
  labelText: "Full name",
  type: "text"
}

export const Error = Template.bind({})
Error.args = {
  labelText: "Full name",
  type: "text",
  error: "Please put in here"
}
