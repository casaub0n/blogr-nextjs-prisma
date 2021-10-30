import * as React from 'react'
import { useController, UseControllerProps } from 'react-hook-form'

/**
 * @package
 */
export type Props = {
  labelText: string
  error?: string
} & JSX.IntrinsicElements['select']

/**
 * @package
 */
export const Component: React.VFC<Props> = ({labelText, error, ...props}) => {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-medium">{labelText}</label>
      <select className="w-full border-gray-300 rounded-lg shadow-sm" {...props} />
      {!!error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  )
}

type ContainerProps<T> = Props & UseControllerProps<T>

export function Container<T>({labelText, error, ...props}: ContainerProps<T>): JSX.Element {
  const { field } = useController<T>(props)

  return (
    <Component labelText={labelText} placeholder={props.name} error={error} {...field} {...props}  />
  )
}

export { Container as Select }
