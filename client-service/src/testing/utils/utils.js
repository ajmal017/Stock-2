import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import myStore from '../../redux/store'


function render(ui, { ...renderOptions } = {}) {
    function Wrapper({ children }) {
        return <Provider store={myStore}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }