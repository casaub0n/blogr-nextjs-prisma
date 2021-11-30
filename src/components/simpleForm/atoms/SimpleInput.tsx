import * as React from 'react'

export type Props = {
  error?: string
  className?: string
  labelText: string
} & JSX.IntrinsicElements['input']

/**
 * @package
 */
 export const Component: React.VFC<Props> = ({labelText, error, ...props}) => {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-medium">{labelText}</label>
      <input type="text" className="w-full border-gray-300 rounded-lg shadow-sm" {...props} />
      {!!error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  )
}

export { Component as Input }
