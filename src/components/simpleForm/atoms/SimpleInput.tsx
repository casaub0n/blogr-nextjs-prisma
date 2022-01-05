import * as React from 'react'

export type Props = {
  error?: string
  className?: string
  lmessage: string
} & JSX.IntrinsicElements['input']

/**
 * @package
 */
export const Component = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-medium">{props.lmessage}</label>
      <input type="text" className="w-full border-gray-300 rounded-lg shadow-sm" ref={ref} {...props} />
      {!!props.error && <p className="text-red-500 text-xs italic">{props.error}</p>}
    </div>
  )
})

Component.displayName = 'Input'

export { Component as Input }
