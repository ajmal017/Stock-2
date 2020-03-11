import React from 'react';
import logic from './logic'
import LinChart from '../lineChart/lineChart'



const HistoricPrice = () => {
    const { stockPriceHistory, stocks } = logic()
    return (
        <LinChart title="Normalised Price" data={stockPriceHistory} stocks={stocks} xInterval="preserveStartEnd"
            dataKey="index" width={3} tickFormatter={value => value.toString().slice(0, 4)}
            tooltip="This is the normalized price of the stocks -> Price(t)= Price(t) / Price(t=1) * 100"
        ></LinChart>
    );
}


export default HistoricPrice
