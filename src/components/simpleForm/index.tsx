import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { WInput } from './atoms/SimpleInput'
import type { WProps } from './atoms/SimpleInput'
import { useForm } from 'react-hook-form'
import { SimpleForm } from './atoms/SimpleForm'
import { WSelect, WSelectProps } from './atoms/SimpleSelect'
import { WTextAreaProps, WTextArea } from './atoms/SimpleTextArea'
import { WCheckBoxProps, WCheckBox } from './atoms/SimpleCheckBox'

type FormName = {
  name: string
  email: string
  date: Date
  event: string
  detail: string
  offer: boolean
}

const Input: React.VFC<WProps<FormName>> = (props) => {
  return (
    <WInput {...props} />
  )
}

const Select: React.VFC<WSelectProps<FormName>> = (props) => {
  return (
    <WSelect {...props} />
  )
}

const TextArea: React.VFC<WTextAreaProps<FormName>> = (props) => {
  return (
    <WTextArea {...props} />
  )
}

const CheckBox: React.VFC<WCheckBoxProps<FormName>> = (props) => {
  return (
    <WCheckBox {...props} />
  )
}

export const schema = z.object({
  name: z.string().nonempty({ message: 'Reauired' }),
  email: z.string().email({ message: 'email' }),
  date: z.date(),
  event: z.string().nonempty({ message: 'Required' }),
  detail: z.string(),
  offer: z.boolean()
})

export const Container: React.VFC = () => {
  const { control, formState: { errors }, handleSubmit } = useForm<FormName>({
    mode: 'onChange',
    resolver: zodResolver(schema)
  })

  const onSubmit = async () => {
    await fetch(`https://example.com`, {
      method: 'PUT',
    })
  }

  return (
    <SimpleForm onSubmit={handleSubmit(onSubmit)}>
      <Input type="text" labelText="Full name" control={control}  name="name" error={errors.name?.message} />
      <Input type="email" labelText="Email Address" control={control}  name="email" error={errors.email?.message} />
      <Input type="date" labelText="When is your event?" name="date" control={control} error={errors.date?.message} />
      <Select labelText="What type of event is it?" name="event" control={control}>
        <option>Corporate event</option>
        <option>Wedding</option>
        <option>Birthday</option>
        <option>Other</option>
      </Select>
      <TextArea labelText="Additional details" rows={3} name="detail" control={control} error={errors.detail?.message} />
      <CheckBox message="Email me news and special offers" checked control={control} name="offer" />
    </SimpleForm>
  )
}

export { Container as SimpleForm }
