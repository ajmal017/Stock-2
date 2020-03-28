import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'


const Logic = () => {
    const frontier = useSelector(state => (state.efficientFrontier.frontier), shallowEqual);
    const maxSharpe = useSelector(state => (state.efficientFrontier.maxSharpe), shallowEqual);
    const minVolatility = useSelector(state => (state.efficientFrontier.minVolatility), shallowEqual);
    return { frontier, maxSharpe, minVolatility }
}

export default Logic
