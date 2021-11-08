import { Meta, Story } from '@storybook/react'
import React, { ComponentProps } from 'react'

import { Component } from './SyntaxHighlighter'

export default {
  title: 'Syntex highligh',
  component: Component
} as Meta

type Props = ComponentProps<typeof Component>

const Template: Story<Props> = args => <Component {...args} />

export const Default = Template.bind({})
Default.args = {
  codeString: 'export const Component: React.VFC = () => <div>Hello world</div>',
  language: 'javascript'
}

