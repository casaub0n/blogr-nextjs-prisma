import React from 'react'
import styled from 'styled-components'

type Props = {
  src: string
}

const Component: React.FC<Props> = (prpps) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
      <div className="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition">
        <img className="dogimage w-full" src={prpps.src} alt="cute dog!" />
        <div className="p-6 flex flex-col justify-between">
          <h3 className="font-medium text-gray-900 mb-4 leading-normal">Awesome Shiba dooog!!!</h3>
          <p className="inline-flex items-center">
            <span className="text-gray-700 text-sm">Read More</span>
          </p>
        </div>
      </div>
    </div>
  )
}

const StyledComponent = styled(Component)``

export default StyledComponent
