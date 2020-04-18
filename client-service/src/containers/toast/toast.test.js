import React from 'react'
import { createStore } from 'redux'
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, fireEvent, screen } from '../../testing/utils/utils'
import '@testing-library/jest-dom/extend-expect'
import Toast from './toast'


test('No error toast is displayed because there is no error message', () => {
    render(<Toast></Toast>)
    expect(screen.queryByText('toast')).toBeNull()
})


