import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { portfolioAnalysis } from '../../redux/portfolioActions'

const Logic = () => {
    const dispatch = useDispatch()
    const stocks = useSelector(state => state.tickers.tickers)
    const rollingVolatility = useSelector(state => state.portfolioAnalysis.rollingVolatility)
    const cumulativeReturns = useSelector(state => state.portfolioAnalysis.cumulativeReturns)

    useEffect(() => {
        const fetchData = async () => await dispatch(portfolioAnalysis(stocks))
        console.log('useEffect in portfolio')
        if (stocks.length > 0) fetchData()
    }, [stocks])

    return { stocks, rollingVolatility, cumulativeReturns }
}

export default Logic