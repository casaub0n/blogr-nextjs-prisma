import * as React from 'react'

import { Header } from './header'
import { LayoutSection } from './LayoutSection'

type Props = {
  children?: React.ReactNode
}

const Component: React.FC<Props> = ({ children }) => (
  <>
    <Header />
    <LayoutSection>
      {children}
    </LayoutSection>
  </>
)

export {Component as Layout}
