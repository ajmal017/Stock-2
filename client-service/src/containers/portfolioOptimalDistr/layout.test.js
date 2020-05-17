import React from 'react'
import { render, screen } from '../../testing/utils/utils'
import '@testing-library/jest-dom/extend-expect'
import Item from './layout'

test('Optimal and minimal risk barplots are displayed charts are displayed', () => {
    render(<Item />)
    const elements = screen.getAllByTestId('chart')
    expect(elements.length).toBe(1)
    expect(screen.getByText('Optimal Risk Adjusted Distribution')).toHaveTextContent('Optimal Risk Adjusted Distribution')
})


