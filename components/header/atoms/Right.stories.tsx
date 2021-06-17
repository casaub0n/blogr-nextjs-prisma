import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import { StyledComponent as Component } from './Right'

export default {
  title: 'Right component',
  component: Component,
} as Meta

type Props = ComponentProps<typeof Component>

const Template: Story<Props> = args => <Component {...args} />

export const Default = Template.bind({})
Default.args = {
  className: "right",
}
