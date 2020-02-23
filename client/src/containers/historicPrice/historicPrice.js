import React from 'react';
import logic from './logic'
import LinChart from '../lineChart/lineChart'


const HistoricPrice = () => {
    const { stockPriceHistory, stocks } = logic()
    return (
        <LinChart data={stockPriceHistory} stocks={stocks} xInterval={180} width={3} ></LinChart>
    );
}





export default HistoricPrice
