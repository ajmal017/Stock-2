import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'


const Logic = () => {
    const frontier = useSelector(state => (state.portfolioReducer.efficientFrontier), shallowEqual);
    const maxSharpe = useSelector(state => (state.portfolioReducer.maxSharpe), shallowEqual);
    const minVolatility = useSelector(state => (state.portfolioReducer.minVolatility), shallowEqual);
    return { frontier, maxSharpe, minVolatility }
}

export default Logic
