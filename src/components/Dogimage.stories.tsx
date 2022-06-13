import { Meta,Story } from '@storybook/react'
import React, { ComponentProps } from 'react'

import { StyledComponent as Component } from './DogImage'

export default { title: 'Dog Image' } as Meta

type Props = ComponentProps<typeof Component>

const Template: Story<Props> = args => <Component {...args} />

export const Default = Template.bind({})
Default.args = {
  className: 'dogname'
}
