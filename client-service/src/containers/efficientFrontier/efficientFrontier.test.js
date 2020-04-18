import React from 'react'
import { render, screen } from '../../testing/utils/utils'
import '@testing-library/jest-dom/extend-expect'
import Item from './efficientFrontier'

test('Efficient frontier chart is covered by blur', () => {
    render(<Item />)
    expect(screen.getByTestId('chart')).toHaveTextContent('Efficient FrontierSelect 2+ companies')
})