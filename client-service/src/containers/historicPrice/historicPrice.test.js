import React from 'react'
import { render, screen } from '../../testing/utils/utils'
import '@testing-library/jest-dom/extend-expect'
import Chart from './historicPrice'

test('Select a company blur is displayed over the historic price chart', () => {
    render(<Chart />)
    const element = screen.getByTestId('chart')
    expect(element).toHaveTextContent('Price HistorySelect a Company')
})