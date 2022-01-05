import { Meta, Story } from '@storybook/react'
import React, { ComponentProps } from 'react'

import { SimpleButton } from './SimpleButton'
import { Component as CheckBox } from './SimpleCheckBox'
import { Component } from './SimpleForm'
import { Component as Input } from './SimpleInput'
import { Component as Select } from './SimpleSelect'
import { Component as TextArea } from './SimpleTextArea'

export default {
  title: 'Simple Form',
  component: Component,
} as Meta

type Props = ComponentProps<typeof Component>

const Template: Story<Props> = args => <Component {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <Input type="text" lmessage="Full name" />
      <Input type="email" lmessage="Email address" />
      <Input type="date" lmessage="When is your event?" />
      <Select lmessage="What type of event is it?">
        <option>Corporate event</option>
        <option>Wedding</option>
        <option>Birthday</option>
        <option>Other</option>
      </Select>
      <TextArea lmessage="Additional details" rows={3} />
      <CheckBox message="Email me news and special offers" checked />
      <SimpleButton>Submit</SimpleButton>
    </>
  )
}

export const Error = Template.bind({})
Error.args = {
  children: (
    <>
      <Input type="text" lmessage="Full name" error="required" />
      <Input type="email" lmessage="Email address" />
      <Input type="date" lmessage="When is your event?" />
      <Select lmessage="What type of event is it?">
        <option>Corporate event</option>
        <option>Wedding</option>
        <option>Birthday</option>
        <option>Other</option>
      </Select>
      <TextArea lmessage="Additional details" rows={3} />
      <CheckBox message="Email me news and special offers" checked />
      <SimpleButton>Submit</SimpleButton>
    </>
  )
}
