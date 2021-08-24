import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import { StyledComponent as Component } from './index'

export default {
  title: 'Create post',
  component: Component,
} as Meta

type Props = ComponentProps<typeof Component>

const Template: Story<Props> = args => <Component {...args} />

const [title, setTitle] = React.useState('')
const titleEvent = (e: React.ChangeEvent<HTMLInputElement>): void => {
  return setTitle(e.target.value)
}

const [content, setContent] = React.useState('')
const contentEvent = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
  return setContent(e.target.value)
}

const submitData = async (e: React.SyntheticEvent) => {
  e.preventDefault()
}

export const Default = Template.bind({})
Default.args = {
  className: "page",
  title: title,
  titleEvent: titleEvent,
  content: content,
  contentEvent: contentEvent,
  submitData: submitData
}
