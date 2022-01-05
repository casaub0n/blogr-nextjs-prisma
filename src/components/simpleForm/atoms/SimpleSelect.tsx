import * as React from 'react'

/**
 * @package
 */
export type Props = {
  lmessage: string
  error?: string
} & JSX.IntrinsicElements['select']

/**
 * @package
 */
export const Component = React.forwardRef<HTMLSelectElement, Props>((props, ref) => {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-medium">{props.lmessage}</label>
      <select className="w-full border-gray-300 rounded-lg shadow-sm" ref={ref} {...props} />
      {!!props.error && <p className="text-red-500 text-xs italic">{props.error}</p>}
    </div>
  )
})

Component.displayName = 'Select'

export { Component as Select }
