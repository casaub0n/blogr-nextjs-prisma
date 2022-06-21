import { zodResolver } from '@hookform/resolvers/zod'
import Router from 'next/router'
import * as React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styled from 'styled-components'
import * as z from 'zod'

import Back from './atoms/Back'
import { ContentArea } from './atoms/ContentArea'
import { SubmitButton } from './atoms/SubmitButton'
import { TitleInput } from './atoms/TitleInput'

type Props = {
  className: string
  children: React.ReactNode
} & JSX.IntrinsicElements['form']

const Component: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <div className={className}>
      <form {...props}>
        <h1>New Draft</h1>
        {children}
      </form>
    </div>
  )
}

export const StyledComponent = styled(Component)`
  background: var(--geist-background);
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const schema = z.object({
  title: z.string(),
  content: z.string()
})

export type FormName = z.infer<typeof schema>

const Container: React.FC = () => {
  const { register, handleSubmit, getValues } = useForm<FormName>({
    mode: 'onChange',
    resolver: zodResolver(schema)
  })

  const title = getValues('title')
  const content = getValues('content')

  const onSubmit: SubmitHandler<FormName> = async () => {
    try {
      const body = { title, content }
      await fetch('/api/post', {
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      await Router.push('/drafts')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <StyledComponent className="page" onSubmit={handleSubmit(onSubmit)}>
      <TitleInput {...register('title')} />
      <ContentArea {...register('content')} />
      <SubmitButton content={content} title={title} />
      <Back />
    </StyledComponent>
  )
}

export { Container as Create }
