import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import { Component } from './SimpleTextArea'

export default {
  title: 'Simple Textarea',
  component: Component,
} as Meta

type Props = ComponentProps<typeof Component>

const Template: Story<Props> = args => <Component {...args} />

export const Default = Template.bind({})
Default.args = {
  labelText: "Additional details"
}

export const Error = Template.bind({})
Error.args = {
  labelText: "Additional details",
  error: "Please put in here"
}
