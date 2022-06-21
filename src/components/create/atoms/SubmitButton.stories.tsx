import { Meta, Story } from '@storybook/react'
import React from 'react'

import { SubmitButton } from './SubmitButton'

export default {
  title: 'Submit button',
  component: SubmitButton,
} as Meta

const Template: Story = () => <SubmitButton />

export const Default = Template.bind({})
