import React from 'react';
import logic from './logic'
import LinChart from '../lineChart/lineChart'


const PriceChang = () => {
    const { stockPriceChange, stocks } = logic()
    return (
        <LinChart data={stockPriceChange} stocks={stocks} xInterval={2}
            tickFormatter={value => value.toString().slice(0, 4)} width={1.5} dataKey="date"></LinChart>
    );
}





export default PriceChang
