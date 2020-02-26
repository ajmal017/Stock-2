import React from 'react';
import logic from './logic'
import LinChart from '../lineChart/lineChart'


const PriceChang = () => {
    const { stockPriceChange, stocks } = logic()
    console.log('sotckprice change', stockPriceChange)
    return (
        <LinChart data={stockPriceChange} stocks={stocks} width={1.5} dataKey="Date"></LinChart>
    );
}





export default PriceChang
