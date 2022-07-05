import { zodResolver } from '@hookform/resolvers/zod'
import * as React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'

import { SimpleButton } from './atoms/SimpleButton'
import { CheckBox } from './atoms/SimpleCheckBox'
import { SimpleForm } from './atoms/SimpleForm'
import { Input } from './atoms/SimpleInput'
import { Select } from './atoms/SimpleSelect'
import { TextArea } from './atoms/SimpleTextArea'

export const schema = z.object({
  name: z.string().nonempty({ message: 'Reauired' }),
  email: z.string().email({ message: 'email' }),
  date: z.date(),
  event: z.string().nonempty({ message: 'Required' }),
  detail: z.string(),
  offer: z.boolean()
})

export type FormName = z.infer<typeof schema>

export const Container: React.FC = () => {
  const { register, formState: { errors }, handleSubmit } = useForm<FormName>({
    mode: 'onChange',
    resolver: zodResolver(schema)
  })

  const onSubmit: SubmitHandler<FormName> = async () => {
    await fetch(`https://example.com`, {
      method: 'PUT',
    })
  }

  return (
    <SimpleForm onSubmit={handleSubmit(onSubmit)}>
      <Input type="text" lmessage="Full name" {...register("name")} error={errors.name?.message} placeholder='Takashi Yoshida'/>
      <Input type="email" lmessage="Email Address" {...register("email")} error={errors.email?.message} />
      <Input type="date" lmessage="When is your event?" {...register("date")} error={errors.date?.message} />
      <Select lmessage="What type of event is it?" {...register("event")}>
        <option>Corporate event</option>
        <option>Wedding</option>
        <option>Birthday</option>
        <option>Other</option>
      </Select>
      <TextArea lmessage="Additional details" rows={3} {...register("detail")} error={errors.detail?.message} />
      <CheckBox message="Email me news and special offers" checked {...register("email")} />
      <SimpleButton type="submit">Submit</SimpleButton>
    </SimpleForm>
  )
}

export { Container as SimpleForm }
