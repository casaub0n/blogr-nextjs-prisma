import React from 'react'
import Header from '../components/Header'

export default { title: 'Header' }

export const withHeader: React.FC = () => (
  <Header location="http://example.com/">Example.com</Header>
)
