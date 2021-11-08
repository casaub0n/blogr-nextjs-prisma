/**
 * @jest-environment jsdom
 */
import { cleanup, fireEvent, render } from '@testing-library/react'
import React from 'react'

import FizzBuzz from '../FizzBuzz'

afterEach(cleanup)

// arrange
let inputElement: HTMLElement, outputElement: HTMLElement
beforeEach(() => {
  const { getByTestId } = render(<FizzBuzz />)
  inputElement = getByTestId('input')
  outputElement = getByTestId('output')
})

describe('When you input other number, it shows as it is in the output area.', () => {
  describe('it shows your input number in the output area.', () =>{
    it('When you input "1" in the answer area, it shows "1" in the output area.', () => {
      // act
      fireEvent.change(inputElement, { target: { value: '1' } })
      // assert
      expect(outputElement.textContent).toBe('1')
    })
  })

  it('When you input a multiple of "3" in the input area,it shows "fizz" in the output area.', () => {
    fireEvent.change(inputElement, { target: { value: '3' }})
    expect(outputElement.textContent).toBe('fizz')
  })

  it('When you input a multiple of  "5" in the input area,it shows "buzz" in the output area.', () => {
    fireEvent.change(inputElement, { target: { value: '5' }})
    expect(outputElement.textContent).toBe('buzz')
  })

  it('When you input a multiple of "3" and "5" in the input area,it shows "fizzbuzz" in the output area.', () => {
    fireEvent.change(inputElement, { target: { value: '15' }})
    expect(outputElement.textContent).toBe('fizzbuzz')
  })
})

