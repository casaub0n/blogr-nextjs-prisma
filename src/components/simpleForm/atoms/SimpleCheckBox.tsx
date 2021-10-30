import * as React from 'react'
import { useController, UseControllerProps } from 'react-hook-form'

type Props = {
  message: string
} & JSX.IntrinsicElements['input']

/**
 * @package
 */
export const Component: React.VFC<Props> = ({checked, message, ...props}) => {
  return (
    <div className="block">
      <div className="mt-2">
        <label className="inline-flex items-center">
          <input type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" checked={checked} {...props} />
          <span className="ml-2">{message}</span>
        </label>
      </div>
    </div>
  )
}

type ContainerProps<T> = Props & UseControllerProps<T>

export function Container<T>({message, ...props}: ContainerProps<T>): JSX.Element {
  const { field } = useController<T>(props)

  return (
    <Component message={message} {...field} {...props}  />
  )
}

export { Container as CheckBox }
