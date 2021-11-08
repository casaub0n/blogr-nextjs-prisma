import { Meta, Story } from '@storybook/react'
import React, { ComponentProps } from 'react'

import { StyledComponent as Bold } from './Bold'
import { StyledComponent as Component } from './Left'

export default {
  title: 'Left component',
  component: Component,
} as Meta

type Props = ComponentProps<typeof Component>

const Template: Story<Props> = args => <Component {...args} />

export const Default = Template.bind({})
Default.args = {
  className: "left",
  children: (
    <Bold to="http://example.com/" className="bold" data-active="true">Feed</Bold>
  )
}

export const Login = Template.bind({})
Login.args = {
  className: "left",
  children: (
    <>
      <Bold to="http://example.com/" className="bold" data-active="true">Feed</Bold><a data-active="true">My draft</a>
    </>
  )
}
