import React from 'react'
import { render, screen } from '../../testing/utils/utils'
import '@testing-library/jest-dom/extend-expect'
import Item from './layout'
import axiosMock from 'axios'
import store from '../../redux/store'

test('Portfolio Cumulative Log returns chart is displayed', () => {
    render(<Item />)
    const element = screen.getByTestId('chart')
    expect(element).toHaveTextContent('Portfolio Cumulative Log Returns')
})


