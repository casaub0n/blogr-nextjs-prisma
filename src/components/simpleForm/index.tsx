import { zodResolver } from '@hookform/resolvers/zod/dist/zod'
import * as React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'

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

export const Container: React.VFC = () => {
  const { control, formState: { errors }, handleSubmit } = useForm<FormName>({
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
      <Input type="text" labelText="Full name" control={control} name="name" error={errors.name?.message} />
      <Input type="email" labelText="Email Address" control={control} name="email" error={errors.email?.message} />
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
