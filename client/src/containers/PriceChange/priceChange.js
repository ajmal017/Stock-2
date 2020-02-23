import React from 'react';
import logic from './logic'
import LinChart from '../lineChart/lineChart'


const PriceChang = () => {
    const { stockPriceChange, stocks } = logic()
    return (
        <LinChart data={stockPriceChange} stocks={stocks} xInterval={180} width={1.5} ></LinChart>
    );
}





export default PriceChang
