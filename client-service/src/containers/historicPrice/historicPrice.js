import React from 'react';
import logic from './logic'
import LinChart from '../lineChart/lineChart'


const HistoricPrice = () => {
    const { stockPriceHistory, stocks } = logic()
    return (
        <LinChart data={stockPriceHistory} stocks={stocks} xInterval="preserveStartEnd"
            dataKey="date" width={3} tickFormatter={value => value.toString().slice(0, 4)}
            title="Price History"
            tooltip="Closing price of June and December in each year"
        ></LinChart>
    );
}





export default HistoricPrice
