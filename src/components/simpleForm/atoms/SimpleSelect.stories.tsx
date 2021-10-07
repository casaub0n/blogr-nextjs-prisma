import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import { Component } from './SimpleSelect'

export default {
  title: 'Simple Select',
  component: Component,
} as Meta

type Props = ComponentProps<typeof Component>

const Template: Story<Props> = args => <Component {...args} />

export const Default = Template.bind({})
Default.args = {
  labelText: "What type of event is it?",
  children: (
    <>
      <option>Corporate event</option>
      <option>Wedding</option>
      <option>Birthday</option>
      <option>Other</option>
    </>
  )
}

export const Error = Template.bind({})
Error.args = {
  labelText: "What type of event is it?",
  children: (
    <>
      <option>Corporate event</option>
      <option>Wedding</option>
      <option>Birthday</option>
      <option>Other</option>
    </>
  ),
  error: "Please put in here"
}
