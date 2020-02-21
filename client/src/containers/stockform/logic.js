import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { fetchStockData, selectStock } from '../../redux/actions'
import stocks from './stocksList'


const Logic = () => {
    const [state, setState] = useState({
        symbol: {},
        label: "",
        stocks: stocks
    });
    const dispatch = useDispatch();

    const handleChange = symbol => {
        setState({ ...state, symbol });
    };

    const handleClick = (e) => {
        console.log(e)
        e.preventDefault()
        dispatch(selectStock(state.symbol))
    }

    return { state, handleChange, handleClick }
}

export default Logic




