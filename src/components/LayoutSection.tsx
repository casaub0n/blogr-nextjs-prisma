import * as React from 'react'

type Props = {
  children?: React.ReactNode
}

const Component: React.FC<Props> = ({ children }) => (
  <section className="container w-full md:max-x-3xl mx-auto pt-50">
    {children}
  </section>
)

export { Component as LayoutSection }
