import * as React from 'react'
import { useController, UseControllerProps } from 'react-hook-form'

export type Props = {
  labelText: string
  error?: string
} & JSX.IntrinsicElements['textarea']

/**
 * @package
 */
export const Component: React.VFC<Props> = ({labelText, error, ...props}) => {
  return (
    <label className="block">
      <span className="text-gray-700">{labelText}</span>
      <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" {...props} />
      {!!error && <p className="text-red-500 text-xs italic">{error}</p>}
    </label>
  )
}

type ContainerProps<T> = Props & UseControllerProps<T>

export function Container<T>({labelText, error, ...props}: ContainerProps<T>): JSX.Element {
  const { field } = useController<T>(props)

  return (
    <Component labelText={labelText} placeholder={props.name} error={error} {...field} {...props}  />
  )
}

export { Container as TextArea }
