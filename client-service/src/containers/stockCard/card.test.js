import React from 'react'
import { render, fireEvent, screen } from '../../testing/utils/utils'
import '@testing-library/jest-dom/extend-expect'
import Card from './stockCard'
import { FETCH_STOCK_DETAILS } from '../../redux/actionTypes'
import store from '../../redux/store'
import { testData } from './data'


test('Dummy stock card is displayed because no stocks selected', () => {
    render(<Card />)
    expect(screen.getByTestId('card')).toHaveTextContent('FAKE')
})

test('card displays stock after dispatch', () => {
    store.dispatch({ type: FETCH_STOCK_DETAILS, data: testData })
    render(<Card />)
    expect(screen.getByTestId('card')).toHaveTextContent('FB')
})


test('card displays stock after dispatch and then displays dummy after deletion', () => {
    render(<Card />)
    expect(screen.getByTestId('card')).toHaveTextContent('FB')
    fireEvent.click(screen.getByTestId('remove'))
    expect(screen.getByTestId('card')).toHaveTextContent('FAKE')

})

