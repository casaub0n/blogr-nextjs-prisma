import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import { Component } from './SimpleForm'
import { SimpleInput } from './SimpleInput'
import { SimpleSelect } from './SimpleSelect'
import { SimpleTextArea } from './SimpleTextArea'
import { SimpleCheckBox } from './SimpleCheckBox'
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
      <SimpleInput type="text" labelText="Full name" />
      <SimpleInput type="email" labelText="Email address" />
      <SimpleInput type="date" labelText="When is your event?" />
      <SimpleSelect labelText="What type of event is it?">
        <option>Corporate event</option>
        <option>Wedding</option>
        <option>Birthday</option>
        <option>Other</option>
      </SimpleSelect>
      <SimpleTextArea labelText="Additional details" rows={3} />
      <SimpleCheckBox message="Email me news and special offers" checked />
      <SimpleButton message="OK" />
    </>
  )
}

export const Error = Template.bind({})
Error.args = {
  children: (
    <>
      <SimpleInput type="text" labelText="Full name" error="required" />
      <SimpleInput type="email" labelText="Email address" />
      <SimpleInput type="date" labelText="When is your event?" />
      <SimpleSelect labelText="What type of event is it?">
        <option>Corporate event</option>
        <option>Wedding</option>
        <option>Birthday</option>
        <option>Other</option>
      </SimpleSelect>
      <SimpleTextArea labelText="Additional details" rows={3} />
      <SimpleCheckBox message="Email me news and special offers" checked />
      <SimpleButton message="OK" />
    </>
  )
}
