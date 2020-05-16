import React from 'react'
import { render, screen } from '../../testing/utils/utils'
import '@testing-library/jest-dom/extend-expect'
import Item from './layout'

test('both charts are displayed', () => {
    render(<Item />)
    const element = screen.getAllByTestId('chart')
    expect(element.length).toBe(1)
    expect(screen.getByTestId('chart')).toHaveTextContent('Stock Returns and VolatilitySelect a Company')
})