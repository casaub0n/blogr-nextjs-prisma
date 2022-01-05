import { Meta, Story } from '@storybook/react'
import React, { ComponentProps } from 'react'

import { Component } from './SimpleButton'

export default {
  title: 'Simple Button',
  component: Component,
} as Meta

type Props = ComponentProps<typeof Component>

const Template: Story<Props> = args => <Component {...args} />

export const Default = Template.bind({})
Default.args = {
  children: "Submit"
}
