import React from 'react';
import logic from './logic'
import LinChart from '../lineChart/lineChart'


const HistoricPrice = () => {
    const { stockPriceHistory, stocks } = logic()
    return (
        <LinChart data={stockPriceHistory} stocks={stocks} xInterval="preserveStartEnd"
            dataKey="Date" width={3} tickFormatter={value => value.toString().slice(0, 4)}></LinChart>
    );
}





export default HistoricPrice
