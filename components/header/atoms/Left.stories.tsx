import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import { StyledComponent as Component } from './Left'
import { StyledComponent as Bold } from './Bold'

export default {
  title: 'Reft component',
  component: Component,
} as Meta

type Props = ComponentProps<typeof Component>

const Template: Story<Props> = args => <Component {...args} />

export const Default = Template.bind({})
const bold = <Bold href="http://example.com/" className="bold" data-active="true">Feed</Bold>
Default.args = {
  className: "left",
  children: bold
}
const session = <><Bold href="http://example.com/" className="bold" data-active="true">Feed</Bold><a data-active="true">My draft</a></>

export const Session = Template.bind({})
Session.args = {
  className: "left",
  children: session
}
