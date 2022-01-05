import * as React from 'react'

export type Props = {
  lmessage: string
  error?: string
} & JSX.IntrinsicElements['textarea']

/**
 * @package
 */
export const Component = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  return (
    <label className="block">
      <span className="text-gray-700">{props.lmessage}</span>
      <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" ref={ref} {...props} />
      {!!props.error && <p className="text-red-500 text-xs italic">{props.error}</p>}
    </label>
  )
})

Component.displayName = 'TextArea'

export { Component as TextArea }
