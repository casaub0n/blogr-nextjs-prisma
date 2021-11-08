import { Meta, Story } from '@storybook/react'
import React, { ComponentProps } from 'react'

import { Component } from './SimpleCheckBox'

export default {
  title: 'Simple CheckBox',
  component: Component,
} as Meta

type Props = ComponentProps<typeof Component>

const Template: Story<Props> = args => <Component {...args} />

export const Default = Template.bind({})
Default.args = {
  message: "Email me news and special offers"
}
