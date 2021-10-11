import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import { SimpleForm } from './index'

export default {
  title: 'Simple Form with Validation',
  component: SimpleForm,
} as Meta

type Props = ComponentProps<typeof SimpleForm>

const Template: Story<Props> = args => <SimpleForm {...args} />

export const Default = Template.bind({})
