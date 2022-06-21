import { Meta, Story } from '@storybook/react'
import React from 'react'

import { ContentArea } from './ContentArea'

export default {
  title: 'Content Area',
  component: ContentArea,
} as Meta

const Template: Story = () => <ContentArea />

export const Default = Template.bind({})
