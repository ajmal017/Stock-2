import React from 'react';
import logic from './logic'
import LinChart from '../charts/lineChart/lineChart'


const stockOptions = () => {
    const { stockOptions, stocks, loading } = logic()
    return (
        <LinChart data={stockOptions} stocks={stocks} xInterval="preserveStartEnd"
            dataKey="indicator" width={3} tickFormatter={value => value.toString().slice(0, 4)}
            title="Stock Options"
            tooltip="Option prices are calculated using Black Scholes formula"
            loading={loading}
        ></LinChart>
    );
}





export default stockOptions
