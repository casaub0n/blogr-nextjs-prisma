import { Meta, Story } from '@storybook/react'
import React from 'react'

export default {
  title: 'Color Schema',
} as Meta

const Nord0: Story = () => <p className="text-nord0 text-5xl font-bold">Im fine, thank you</p>
export const nord0 = Nord0.bind({})

const Nord1: Story = () => <p className="text-nord1 text-5xl font-bold">Im fine, thank you</p>
export const nord1 = Nord1.bind({})
