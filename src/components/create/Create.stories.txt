import { Meta, Story } from '@storybook/react'
import React from 'react'

import { LayoutSection } from '../LayoutSection'
import { Create } from './index'

export default {
  title: 'Create content',
  component: Create,
} as Meta

// TODO: separete layout
const Template: Story = () => <LayoutSection><Create /></LayoutSection>

export const Default = Template.bind({})
Default.args = {}
