import React from 'react'
import { Me, MeAvatar } from '../components/Me'

export default { title: 'Test for styled-component' }

export const withMe = <Me className="hoge" />

export const withMeAvatar: React.VFC = () => <MeAvatar />
