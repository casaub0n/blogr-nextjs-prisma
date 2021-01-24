import * as React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'

type MeProps = {
  className: string
}

const MeBasic: React.FC<MeProps> = props =>
    <>
      <h2 className={props.className}>I'm Takashi Yoshida</h2>
      <p>Web</p>
    </>

export const Me = styled(MeBasic)`
  color: red;
`

export const MeAvatar = () => <Avatar alt="casaub0n" src="/myimg.jpg"/>
