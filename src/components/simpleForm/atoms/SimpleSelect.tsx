import * as React from 'react'

export type Props = {
  labelText: string
} & JSX.IntrinsicElements['select']

const Component: React.VFC<Props> = ({labelText, ...props}) => {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-medium">{labelText}</label>
      <select className="w-full border-gray-300 rounded-lg shadow-sm" {...props} />
    </div>
  )
}

export { Component as SimpleSelect }
