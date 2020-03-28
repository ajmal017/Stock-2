import React from 'react';
import logic from './logic'
import LinChart from '../charts/lineChart/lineChart'



const HistoricPrice = () => {
    const { stockPriceHistory, stocks, loading } = logic()
    return (
        <LinChart title="Normalised Price History" data={stockPriceHistory} stocks={stocks} xInterval="preserveStartEnd"
            dataKey="date" width={3} tickFormatter={value => value.toString().slice(0, 4)}
            tooltip="This is the normalized price of the stocks -> Price(t)= Price(t) / Price(t=1) * 100"
            loading={loading}
        ></LinChart>
    );
}


export default HistoricPrice
