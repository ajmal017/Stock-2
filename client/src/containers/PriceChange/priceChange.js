import React from 'react';
import logic from './logic'
import LinChart from '../lineChart/lineChart'


const PriceChang = () => {
    const { stockPriceChange, stocks } = logic()
    console.log('sotckprice change', stockPriceChange)
    return (
        <LinChart data={stockPriceChange} stocks={stocks} xInterval={1} tickFormatter={value => value.toString().slice(0, 4)} width={1.5} dataKey="Date"></LinChart>
    );
}





export default PriceChang
