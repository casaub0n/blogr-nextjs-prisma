import * as React from 'react'

type Props = {
  children: React.ReactNode
} & JSX.IntrinsicElements['form']

/**
 * @package
 */
 export const Component: React.FC<Props> = ({children, onSubmit, ...props}) => {
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
        <form className="md-0 space-y-6" onSubmit={onSubmit} {...props} >
          {children}
        </form>
      </div>
    </div>
  )
}

export { Component as SimpleForm }
