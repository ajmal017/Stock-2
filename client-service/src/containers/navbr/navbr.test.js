import React from 'react'
import { render, screen } from '../../testing/utils/utils'
import '@testing-library/jest-dom/extend-expect'
import Navbr from './navbr'


test('navbar with home link is displayed', () => {
    render(<Navbr />)
})