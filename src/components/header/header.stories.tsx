import { Meta, Story } from '@storybook/react'
import React, { ComponentProps } from 'react'

import { StyledComponent as Component } from './index'

type Props = ComponentProps<typeof Component>

export default {
  title: 'header',
  component: Component,
  argTypes: {
    className: {
      description: 'html class name'
    },
    session: {
      description: 'session status for authorization'
    },
    loading: {
      description: 'loading for data'
    },
    handleClick: {
      description: 'click event'
    },
    isActive: {
      description: 'check active link'
    }
  }
} as Meta<Props>

const Template: Story<Props> = args => <Component {...args} />

export const UnLogin = Template.bind({})
UnLogin.args = {
  className: "header",
  session: false,
  loading: false,
  handleClick: () => console.info('click'),
  isActive: (pathName: 'example@example.com') => pathName === 'example@example.com'
}

export const Loading = Template.bind({})
Loading.args = {
  className: 'header',
  session: false,
  loading: true,
  handleClick: () => console.info('click'),
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
  handleClick: () => console.info('click'),
  isActive: (pathName: 'example@example.com') => pathName === 'example@example.com'
}
