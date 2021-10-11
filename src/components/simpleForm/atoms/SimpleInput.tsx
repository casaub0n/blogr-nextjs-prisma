import * as React from 'react'
import { useController, UseControllerProps } from 'react-hook-form'

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

export { Component as SimpleInput }

export type WProps<T> = Props & UseControllerProps<T>

export function WContainer<T>({labelText, error, ...props}: WProps<T>): JSX.Element {
  const { field } = useController(props)

  return (
    <Component labelText={labelText} placeholder={props.name} error={error} {...field} {...props}  />
  )
}

export { WContainer as WInput }
