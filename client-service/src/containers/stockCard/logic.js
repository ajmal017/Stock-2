import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Logic = () => {
    const stocks = useSelector(state => state.stockDetails.stockDetails)

    return { stocks }

}

export default Logic
