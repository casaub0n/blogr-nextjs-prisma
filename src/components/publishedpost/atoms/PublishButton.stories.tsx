import { Meta, Story } from '@storybook/react'
import React, { ComponentProps } from 'react'

import { StyledComponent as Component } from './PublishButton'

export default {
  title: 'Publish Button',
  component: Component
} as Meta

type Props = ComponentProps<typeof Component>

const Template: Story<Props> = args => <Component {...args} />

const hoge = async (id: number) => {
  await fetch(`http://example.com/${id}`, {
    method: 'PUT',
  })
}

export const Default = Template.bind({})
Default.args = {
  className: "publish_button",
  id: '2',
  handleClickEvent: hoge
}
