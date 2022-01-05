import { Meta, Story } from '@storybook/react'
import React from 'react'

import { SimpleForm } from './index'

export default {
  title: 'with react-hook-form',
  component: SimpleForm,
} as Meta

const Template: Story = () => <SimpleForm />

export const Default = Template.bind({})
