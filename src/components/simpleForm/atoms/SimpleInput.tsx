import * as React from 'react'

export type Props = {
  error?: string
  className?: string
  placeholder?: string
  labelText: string
} & JSX.IntrinsicElements['input']

/**
 * @package
 */
 export const Component: React.VFC<Props> = ({labelText, ...props}) => {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-medium">{labelText}</label>
      <input type="text" className="w-full border-gray-300 rounded-lg shadow-sm" {...props} />
      {!!props.error && <p className="text-red-500 text-xs italic">{props.error}</p>}
    </div>
  )
}

export { Component as SimpleInput }



/**
 * @example
 * const FORM_NAME = {
 *  NAME: 'name',
 *  EMAIL: 'email',
 *  DATE: 'date'
 * } as const
 * type FormName = typeof FORM_NAME[keyof typeof FORM_NAME]
 * type NewInputProps = ContainerProps<FormName>
 */
export type InputProps<T extends string> = Omit<React.ComponentProps<typeof Component>, 'name'> & { name: T }

/**
 * name is for form, each name must be unique.
 * FORM_NAME of this example is used for form library.
 * @example
 * const FORM_NAME = {
 *  NAME: 'name',
 *  EMAIL: 'email',
 *  DATE: 'date'
 * } as const
 * type FormName = typeof FORM_NAME[keyof typeof FORM_NAME]
 * const Input: React.VFC<ContainerProps<FormName>> = ({name, labelText, ...props}) => {
 *  return (
 *    <Input name={name} labelText={labelText} {...props} />
 *  )
 * }
 */
const Container = <T extends string>({name, ...props}: InputProps<T>): JSX.Element => {
  return (
    <Component name={name} {...props} />
  )
}

export { Container as WInput }
