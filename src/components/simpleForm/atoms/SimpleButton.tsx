import * as React from 'react'

type Props = {
  message: string
} & JSX.IntrinsicElements['button']

/**
 * @package
 */
export const Component: React.VFC<Props> = ({message, ...props}) => {
  return (
    <div className="flex w-full">
      <button type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " {...props} >
        {message}
      </button>
    </div>
  )
}

export { Component as SimpleButton }
