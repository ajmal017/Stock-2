import React from 'react'
import { render, screen } from '../../testing/utils/utils'
import '@testing-library/jest-dom/extend-expect'
import Item from './layout'
import axiosMock from 'axios'
import store from '../../redux/store'

test('Optimal and minimal risk barplots are displayed charts are displayed', () => {
    render(<Item />)
    const element = screen.getByTestId('chart')
    expect(element).toHaveTextContent('Minimal Volatility Distribution')
})


