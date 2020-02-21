import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { fetchStockPrice, selectStock } from '../../redux/actions'
import stocks from './stocksList'


const Logic = () => {
    const [state, setState] = useState({
        symbol: {},
        stocks: stocks
    });
    const dispatch = useDispatch();
    const symbols = useSelector(state => state.stockReducer.stocksSelected)

    const handleChange = symbol => {
        setState({ ...state, symbol });
    };

    const handleClick = (e) => {
        e.preventDefault()
        const symbol = { ...state.symbol }
        if (!symbols[symbol]) {
            dispatch(selectStock(symbol))
            dispatch(fetchStockPrice(state.symbol.symbol))
        }
    }

    return { state, handleChange, handleClick }
}

export default Logic




