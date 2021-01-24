import { MeAvatar } from '../components/Me'
import { NextPage } from 'next'
import Header from '../components/Header'
import Layout from '../components/Layout'
import { Me } from '../components/Me'
import Link from 'next/link'
import styled from 'styled-components'

type hoge = {
  className: string
}

const Header2Basic: React.FC<hoge> = props => <Link href="/"><a className={props.className}>index</a></Link>

const Header2 = styled(Header2Basic)`
  color: green
`

const About: NextPage = () => (
  <Layout title="About">
    <Header location="/">index</Header>
    <Header2 className="header2" />
    <h1>hello</h1>
    <MeAvatar />
    <Me className="hoge" />
  </Layout>
)

export default About
