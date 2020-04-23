import React from 'react';
import logic from './logic'
import LinChart from '../charts/lineChart/lineChart'


const HistoricPrice = () => {
    const { stockPriceHistory, stocks, loading } = logic()
    return (
        <LinChart title="Price History" data={stockPriceHistory}
            stocks={stocks} xInterval="preserveStartEnd"
            dataKey="date" width={3} tickFormatter={value => value.toString().slice(0, 4)}
            tooltip="Closing price in December in each year"
            loading={loading}
        ></LinChart>
    );
}





export default HistoricPrice
