import * as React from 'react'
import { Control, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { SimpleCheckBox } from './atoms/SimpleCheckBox'
import { SimpleInput } from './atoms/SimpleInput'
import { SimpleSelect } from './atoms/SimpleSelect'
import { SimpleTextArea } from './atoms/SimpleTextArea'

export type ControllProps = React.ComponentProps<typeof SimpleInput>

export type Props = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  control?: Control<{ name: string; email: string; date: string }, object> // TODO:
  error?: string
  handleClick?: () => void
} & JSX.IntrinsicElements['form']

/**
 * @package
 */
export const Component: React.VFC<Props> = ({control, handleClick, ...props}) => {
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
        <form className="md-0 space-y-6" {...props}>
          <SimpleInput name="name" type="text" labelText="Full name" control={control} />
          <SimpleInput name="email" type="text" labelText="Email address" placeholder="example@example.com" control={control} />
          <SimpleInput name="date" type="date" labelText="When is your event?" control={control} />
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

export const Container: React.VFC = () => {
  const schema = z.object({
    name: z.string().nonempty({ message: 'Reauired' }),
    email: z.string(),
    date: z.string()
  })

  const {
    control,
    handleSubmit
  } = useForm({
    mode: 'onSubmit',
    resolver: zodResolver(schema)
  })

  const onSubmit = async () => {
    await fetch(`https://example.com`, {
      method: 'PUT',
    })
  }

  // There're no error...
  return (
    <Component control={control} onSubmit={handleSubmit(onSubmit)} />
  )
}

export { Component as SimpleForm }


