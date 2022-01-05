import * as React from 'react'

type Props = {
  message: string
} & JSX.IntrinsicElements['input']

/**
 * @package
 */
export const Component = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <div className="block">
      <div className="mt-2">
        <label className="inline-flex items-center">
          <input type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" checked={props.checked} ref={ref} {...props} />
          <span className="ml-2">{props.message}</span>
        </label>
      </div>
    </div>
  )
})

Component.displayName = 'CheckBox'

export { Component as CheckBox }
