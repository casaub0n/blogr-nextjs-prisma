import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Create } from './index'

export default {
  title: 'Create content',
  component: Create,
} as Meta

// TODO: separete layout
const Template: Story = () => <section className="container w-full md:max-x-3xl mx-auto pt-50"><Create /></section>

export const Default = Template.bind({})
Default.args = {}
