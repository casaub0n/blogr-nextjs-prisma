import React from 'react'
import { Me, MeAvatar } from './Me'

// eslint-disable-next-line import/no-anonymous-default-export
export default { title: 'Test for styled-component' }

export const withMe = <Me className="hoge" />

export const withMeAvatar: React.VFC = () => <MeAvatar />
