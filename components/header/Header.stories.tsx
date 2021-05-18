import Link from 'next/link'
import React from 'react'
import { StyledComponent as Component } from './atoms/Bold'

export default { title: 'Bold button' }

export const BoldLink: React.VFC = () => <Link href="/"><Component className="bold">Feed</Component></Link>
