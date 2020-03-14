import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getMetrics } from '../../redux/actions'
import { setError } from '../../redux/errorActions'
import stocks from './stocksList'


const Logic = () => {
    const [state, setState] = useState({
        symbol: {},
        stocks: stocks
    });
    const dispatch = useDispatch();
    const symbols = useSelector(state => state.stockReducer.symbolList, shallowEqual)
    const initialSymbols = useSelector(state => state.stockReducer.initialSymbols, shallowEqual)

    const handleChange = symbol => {
        setState({ ...state, symbol });
    };

    const handleClick = (e) => {
        e.preventDefault()
        if (!symbols.includes(state.symbol.symbol)) {
            const payload = [...symbols, state.symbol.symbol]
            dispatch(getMetrics(payload))
            setState({ ...state, symbol: {} })
        }
        else {
            dispatch(setError('Stock already selected'))
        }
    }

    const handleInitialState = () => {
        const missing = []
        for (const item of initialSymbols) {
            if (!symbols.includes(item)) {
                missing.push(item)
            }
        }
        if (missing.length > 0) dispatch(getMetrics(missing))
        else return;
    }

    useEffect(() => {
        handleInitialState()
    }, [])

    return { state, handleChange, handleClick }
}

export default Logic




