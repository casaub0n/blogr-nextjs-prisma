import { Meta, Story } from '@storybook/react'
import React, { ComponentProps } from 'react'

import { StyledComponent as Component } from './Right'

export default {
  title: 'Right component',
  component: Component,
} as Meta

type Props = ComponentProps<typeof Component>

const Template: Story<Props> = args => <Component {...args} />

export const Loading = Template.bind({})
Loading.args = {
  className: "right",
  children: (<p>Validating session ...</p>)
}

export const Login = Template.bind({})
Login.args = {
  className: "right",
  children: (
    <>
      <p>Takashi takashi@example.com</p>
      <button><a>New post</a></button>
      <button><a>Log out</a></button>
    </>
  )
}

export const Logout = Template.bind({})
Logout.args = {
  className: "right",
  children: (
    <>
      <a data-active="true">Log in</a>
    </>
  )
}
