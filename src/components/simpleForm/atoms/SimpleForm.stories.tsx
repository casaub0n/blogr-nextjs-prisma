import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import { Component } from './SimpleForm'
import { Component as Input } from './SimpleInput'
import { Component as Select } from './SimpleSelect'
import { Component as TextArea } from './SimpleTextArea'
import { Component as CheckBox } from './SimpleCheckBox'
import { SimpleButton } from './SimpleButton'

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
      <Input type="text" labelText="Full name" />
      <Input type="email" labelText="Email address" />
      <Input type="date" labelText="When is your event?" />
      <Select labelText="What type of event is it?">
        <option>Corporate event</option>
        <option>Wedding</option>
        <option>Birthday</option>
        <option>Other</option>
      </Select>
      <TextArea labelText="Additional details" rows={3} />
      <CheckBox message="Email me news and special offers" checked />
      <SimpleButton message="OK" />
    </>
  )
}

export const Error = Template.bind({})
Error.args = {
  children: (
    <>
      <Input type="text" labelText="Full name" error="required" />
      <Input type="email" labelText="Email address" />
      <Input type="date" labelText="When is your event?" />
      <Select labelText="What type of event is it?">
        <option>Corporate event</option>
        <option>Wedding</option>
        <option>Birthday</option>
        <option>Other</option>
      </Select>
      <TextArea labelText="Additional details" rows={3} />
      <CheckBox message="Email me news and special offers" checked />
      <SimpleButton message="OK" />
    </>
  )
}
