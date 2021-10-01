import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import { Component } from './index'

export default {
  title: 'Simple Form',
  component: Component,
} as Meta

type Props = ComponentProps<typeof Component>

const Template: Story<Props> = args => <Component {...args} />

export const Default = Template.bind({})

