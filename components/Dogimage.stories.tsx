import { Story } from '@storybook/react'
import React, { ComponentProps } from 'react'
import { StyledComponent as Component } from '../components/DogImage'

export default { title: 'Dog Image' }

// export const withDogImage = <Component src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg" />

type Props = ComponentProps<typeof Component>

const Template: Story<Props> = args => <Component {...args} />

export const Default = Template.bind({})
Default.args = {
  src: 'https://images.dog.ceo/breeds/shiba/shiba-8.jpg'
}
