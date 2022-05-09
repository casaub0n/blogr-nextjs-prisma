import { Meta,Story } from '@storybook/react'
import React, { ComponentProps } from 'react'

import Player from './Player'
import PlayerCss from './PlayerCss'

export default { title: 'VideoJS Player' } as Meta

type Props = ComponentProps<typeof Player>

const Template: Story<Props> = args => (
  <>
    <Player {...args} />
    <PlayerCss />
  </>
)

export const Default = Template.bind({})
Default.args = {
  videoJsOptions: {
    techOrder: ['youtube'],
    autoplay: false,
    controls: true,
    sources: [
      {
        src: 'https://www.youtube.com/watch?v=IxQB14xVas0',
        type: 'video/youtube',
      },
    ],
  }
}
