import React from 'react'
import { render, screen } from '../../testing/utils/utils'
import '@testing-library/jest-dom/extend-expect'
import Item from './layout'

test('Stock Cumulative Returns chart is displayed', () => {
    render(<Item />)
    const element = screen.getByTestId('chart')
    expect(element).toHaveTextContent('Cumulative Log Returns')
})