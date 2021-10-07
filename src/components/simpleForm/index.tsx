import * as React from 'react'
// import { Control, FieldPathWithValue, FieldValues, get, useController, UseControllerProps, useForm, useFormContext } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import * as z from 'zod'
import { SimpleCheckBox } from './atoms/SimpleCheckBox'
import { WInput } from './atoms/SimpleInput'
import type { InputProps } from './atoms/SimpleInput'
import { SimpleSelect } from './atoms/SimpleSelect'
import { SimpleTextArea } from './atoms/SimpleTextArea'

const FORM_NAME = {
  NAME: 'name',
  EMAIL: 'email',
  DATE: 'date'
} as const

type FormName = typeof FORM_NAME[keyof typeof FORM_NAME]

const Input: React.VFC<InputProps<FormName>> = (props) => {
  return (
    <WInput value={props.value} {...props} />
  )
}

export type Props = {
  error?: string
  handleClick?: () => void
  value?: string | number | readonly string[]
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
  onSubmit?: () => void
}

/**
 * @package
 */
export const Component: React.VFC<Props> = ({handleClick, error, value, onChange, onSubmit}) => {
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
        <form className="md-0 space-y-6" onSubmit={onSubmit}>
          <Input name="name" type="text" labelText="Full name" error={error} value={value} onChange={onChange} />
          <Input name="email" type="text" labelText="Email address" placeholder="example@example.com" error={error} value={value} onChange={onChange} />
          <Input name="date" type="date" labelText="When is your event?" error={error} value={value} onChange={onChange} />
          <SimpleSelect labelText="What type of event is it?">
            <option>Corporate event</option>
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Other</option>
          </SimpleSelect>
          <SimpleTextArea labelText="Additional details" rows={3} />
          <SimpleCheckBox message="Email me news and special offers" checked />
          {/* TODO:button */}
          <button type="button" onClick={handleClick} />
        </form>
      </div>
    </div>
  )
}

// export type WrapFormProps<T extends FieldValues> = Props & UseControllerProps<T>

// export const WrapForm = <T extends FieldValues>(props: WrapFormProps<T>): JSX.Element => {
//   const { name, control } = props
//   const {
//     // formState: { errors },
//     fieldState: {error}
//   } = useController<T>({ name, control })

//   return (
//     <Component error={error?.message} />
//   )
// }

// export type WrapFormProps<T extends FieldValues> = Props & UseControllerProps<T>

// export const WrapForm = <T extends FieldValues>({ name, control, fieldName, labelText }: {
//   name: FormName
//   control: Control<T>
//   fieldName: FormName
//   labelText: string
// }): JSX.Element => {
//   const {
//     field: { value, ...fieldProps },
//     formState: { errors }
//   } = useController<T, FormName>({ name, control })

//   const { message } = get(errors, name)

//   return <Input name={fieldName} labelText={labelText} error={message as string} value={value} />
// }

export type IFormProps = {
  name: string
  email: string
  date: string
}

// const schema = z.object({
//   name: z.string().nonempty({ message: 'Reauired' }),
//   email: z.string(),
//   date: z.string()
// })

// type Schema = z.infer<typeof schema>

// export const Container: React.VFC = () => {
//   const {
//     control,
//     handleSubmit
//   } = useForm<Schema & FieldValues>({
//     mode: 'onSubmit',
//     resolver: zodResolver(schema)
//   })

//   const onSubmit = async () => {
//     await fetch(`https://example.com`, {
//       method: 'PUT',
//     })
//   }

//   // There're no error...
//   return (
//     <WrapForm control={control} handleClick={handleSubmit(onSubmit)} />
//   )
// }

export { Component as SimpleForm }


