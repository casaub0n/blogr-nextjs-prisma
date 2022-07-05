import Image from 'next/image'
import * as React from 'react'
import styled from 'styled-components'

type MeProps = {
  className: string
}

const MeBasic: React.FC<MeProps> = props =>
    <>
      <h2 className={props.className}>I&apos;m Takashi Yoshida</h2>
      <p>Web</p>
    </>

export const Me = styled(MeBasic)`
  color: red;
`

export const MeAvatar: React.FC = () => <Image className="inline-block h-50 w-100 rounded-full ring-2 ring-white" alt="me" src="https://lh3.googleusercontent.com/pw/AM-JKLUGvu1Gd4L_lt1aeqVjy1pw2xd4XqcltQtxI2wqucwk557Ci9mKB3s_TUQjf7oMxNXJgR54gaoCfUsI8mLAeQvnGitb6SjUACerxgOd5aakIolD2_t-edjNYu6NR5RnUQiutWuUqRXrePzp1rgb4Ym7=w691-h921-no?authuser=0" />
