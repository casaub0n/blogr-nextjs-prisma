import { Meta, Story } from '@storybook/react'
import Router from 'next/router'
import React, { ComponentProps } from 'react'

import { StyledComponent as Component } from './Back'

export default {
  title: 'Back button',
  component: Component,
} as Meta

type Props = ComponentProps<typeof Component>

const Template: Story<Props> = args => <a href="#"><Component {...args} /></a>

const clickEvent = () => Router.push('/')

export const Default = Template.bind({})
Default.args = {
  className: "back",
  clickEvent: clickEvent,
  children: "or Cancel"
}
