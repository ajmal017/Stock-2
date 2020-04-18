import React from 'react'
import { render, screen } from '../../testing/utils/utils'
import '@testing-library/jest-dom/extend-expect'
import Chart from './historicPriceNorm'

test('Select a company blur is displayed over the normalised historic price chart', () => {
    render(<Chart />)
    expect(screen.getByTestId('chart')).toHaveTextContent('Normalised Price HistorySelect a Company')
})