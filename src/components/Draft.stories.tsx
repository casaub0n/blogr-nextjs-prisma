import { Meta, Story } from '@storybook/react'
import React, { ComponentProps } from 'react'

import { StyledComponent as Component } from './Draft'

export default {
  title: 'Create post',
  component: Component,
} as Meta

type Props = ComponentProps<typeof Component>

const Template: Story<Props> = args => <Component {...args} />
export const Default = Template.bind({})
Default.args = {
  className: "page",
  login: false
}
