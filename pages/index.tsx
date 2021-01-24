import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import Header from '../components/Header'

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Header location="/about">About</Header>
      <h1>Hello Next.js 👋</h1>
    </Layout>
  )
}

export default IndexPage
