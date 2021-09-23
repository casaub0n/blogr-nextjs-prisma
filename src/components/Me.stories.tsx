import React, { ComponentProps } from 'react'
import { Me, MeAvatar } from './Me'
import { Story, Meta } from '@storybook/react'

export default { title: 'Test for styled-component' } as Meta

type Props = ComponentProps<typeof Me>
const MeTemplate: Story<Props> = args => <Me {...args} />
export const MeDefault = MeTemplate.bind({})
MeDefault.args = {
  className: "hoge",
}

export const withMeAvatar: React.VFC = () => <MeAvatar />

const Template: Story = args => <MeAvatar {...args} />
export const Default = Template.bind({})
