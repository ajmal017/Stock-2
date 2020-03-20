import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'


const Logic = () => {
    const data = useSelector(state => (state.portfolioReducer.efficientFrontier), shallowEqual);
    return { data }
}

export default Logic
