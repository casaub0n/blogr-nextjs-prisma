import { NextPage } from 'next'
import * as React from 'react'

import { Create } from '../components/create'
import Layout from '../components/Layout'

const Page: NextPage = () => (
  <Layout>
    <Create />
  </Layout>
)

export default Page
