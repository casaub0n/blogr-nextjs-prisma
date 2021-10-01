import * as React from 'react'

export type Props = {
  labelText: string
} & JSX.IntrinsicElements['textarea']

const Component: React.VFC<Props> = ({labelText, ...props}) => {
  return (
    <label className="block">
      <span className="text-gray-700">{labelText}</span>
      <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" {...props} />
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </label>
  )
}

export { Component as SimpleTextArea }
