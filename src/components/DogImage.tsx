import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

export type IProps = {
  src: string
  className?: string
}

const Component: React.FC<IProps> = props => {
  return (
    <div className={props.className}>
      <div className={clsx(
        'w-full',
        'md:w-1/2 lg:w-1/3',
        'flex flex-col',
        'mb-8 px-3'
      )}>
        <div className={clsx('overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition')}>
          <Image className={clsx('dogimage w-full')} src={props.src} alt="cute dog!" width='512' height='341' />
            <div className={clsx('p-6 flex flex-col justify-between')}>
              <h3 className={clsx('font-medium text-gray-900 mb-4 leading-normal')}>Awesome Shiba dooog!!!</h3>
              <p className={clsx('inline-flex items-center')}>
                <span className={clsx('text-gray-700 text-sm')}>Read More</span>
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export const StyledComponent = styled(Component)``

const Container: React.FC<IProps> = props => {
  return (
    <StyledComponent {...props} />
  )
}

export default Container
