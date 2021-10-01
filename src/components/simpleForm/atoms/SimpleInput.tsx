import * as React from 'react'
// import { useFormContext } from 'react-hook-form'
import { DeepMap, FieldError, FieldValues, useController, UseControllerProps } from 'react-hook-form'

export type Props = {
  error?: string
  className?: string
  placeholder?: string
  labelText: string
} & JSX.IntrinsicElements['input']

export const Component: React.VFC<Props> = ({labelText, ...props}) => {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-medium">{labelText}</label>
      <input type="text" className="w-full border-gray-300 rounded-lg shadow-sm" {...props} />
      {!!props.error && <p className="text-red-500 text-xs italic">{props.error}</p>}
    </div>
  )
}

export type ContainerProps<T extends FieldValues> = Props & UseControllerProps<T>

// TODO: add error
// https://zenn.dev/manalink/articles/manalink-react-hook-form-v7
export const Container = <T extends FieldValues>(props: ContainerProps<T>): JSX.Element => {
  const { name, control, placeholder, className } = props
  const {
    field: { ref, ...rest },
    formState: { errors },
  } = useController<T>({ name, control })

  // errors[name] && `${(errors[name] as DeepMap<FieldValues, FieldError>).message}`
  // const method = useFormContext()
  // const error = get(errors || method.formState.errors, name)
  // const { message: messageFromRegister, types } = error
  return (
    <Component
      className={className}
      placeholder={placeholder}
      ref={ref}
      {...rest}
      {...props}
      error={(errors as DeepMap<FieldValues, FieldError>)[name].message}
    />
  )
}

// export const Container: React.VFC<Props> = (props) => {
//   const formContext = useFormContext()
//   const { errors } = formContext

//   return (
//     <Component {...props} error={errors.} />
//   )
// }

export { Container as SimpleInput }
