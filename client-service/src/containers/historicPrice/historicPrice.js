import React from 'react';
import logic from './logic'
import LinChart from '../charts/lineChart/lineChart'


const HistoricPrice = () => {
    const { stockPriceHistory, stocks, loading } = logic()
    return (
        <LinChart title="Price History" data={stockPriceHistory}
            stocks={stocks}
            dataKey="date"
            tooltip="Closing price in June and December of each year"
            loading={loading}
        ></LinChart>
    );
}





export default HistoricPrice
