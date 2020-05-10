import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import myStore from '../../redux/store'
import { BrowserRouter } from 'react-router-dom'


function render(ui, { ...renderOptions } = {}) {
    function Wrapper({ children }) {
        return <Provider store={myStore}><BrowserRouter>{children}</BrowserRouter></Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }