import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import { StyledComponent as Component } from './index'

export default {
  title: 'header',
  component: Component,
} as Meta

type Props = ComponentProps<typeof Component>

const Template: Story<Props> = args => <Component {...args} />

export const UnLogin = Template.bind({})
UnLogin.args = {
  className: "header",
  session: false,
  loading: false,
  handleClick: () => console.log('click'),
  isActive: (pathName: 'example@example.com') => pathName === 'example@example.com'
}

export const Loading = Template.bind({})
Loading.args = {
  className: 'header',
  session: false,
  loading: true,
  handleClick: () => console.log('click'),
  isActive: (pathName: 'example@example.com') => pathName === 'example@example.com'
}

export const SignedUp = Template.bind({})
SignedUp.args = {
  className: 'header',
  session: true,
  loading: false,
  user: {
    email: 'example@example.com',
    name: 'Takeshi'
  },
  handleClick: () => console.log('click'),
  isActive: (pathName: 'example@example.com') => pathName === 'example@example.com'
}
