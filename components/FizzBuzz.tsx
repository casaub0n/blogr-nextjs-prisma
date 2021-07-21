import styled from 'styled-components'
import React, { useState } from 'react'

export const Component: React.VFC = () => {
  const [num, setNum] = useState('')

  const convertFizzBuzz = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = Number(e.target.value)
    if (num % 15 === 0) {
      setNum('fizzbuzz')
      return
    }
    if (num % 3 === 0) {
      setNum('fizz')
      return
    }
    if (num % 5 === 0) {
      setNum('buzz')
      return
    }
    setNum(e.target.value)
  }

  return  (
    <div className="fizzBuzz">
      <p>
        input:
        <input type="number" data-testid="input" onChange={convertFizzBuzz} />
      </p>
      <p>
        output:<span data-testid="output">{num}</span>
      </p>
    </div>
  )
}

const StyledComponent = styled(Component)``

const Container: React.VFC = () => {
  return (
    <StyledComponent />
  )
}

export default Container
