import React from 'react';
import logic from './logic'
import Table from '../charts/table/table'


const HistoricPrice = () => {
    const { data, loading, stocks } = logic()
    return (
        <Table data={data} loading={loading} blur={stocks.length < 1}
            tooltip="Calculated using Black-Schole model assuming no dividend payments" ></Table>
    );
}


export default HistoricPrice
