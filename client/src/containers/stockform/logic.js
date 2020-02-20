import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { fetchStockData, selectStock } from '../../redux/actions'


const Logic = () => {
    const [state, setState] = useState({
        symbol: {},
        label: "",
        stocks: []
    });
    const dispatch = useDispatch();

    const handleChange = symbol => {
        setState({ ...state, symbol });
    };

    const fetchStocks = async () => {
        try {
            const res = await axios.get('https://financialmodelingprep.com/api/v3/company/stock/list')
            setState({ ...state, stocks: res.data.symbolsList.slice(0, 300) })
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = () => {
        dispatch(selectStock(state.symbol))
    }

    useEffect(() => {
        fetchStocks()
    }, [])

    return { state, handleChange, handleClick }

}

export default Logic




