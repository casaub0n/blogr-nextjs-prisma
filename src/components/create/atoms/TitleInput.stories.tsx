import { Meta, Story } from '@storybook/react'
import React from 'react'

import { TitleInput } from './TitleInput'

export default {
  title: 'Title Input',
  component: TitleInput,
} as Meta

const Template: Story = () => <TitleInput />

export const Default = Template.bind({})
