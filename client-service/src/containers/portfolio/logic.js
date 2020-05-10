import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const logic = () => {
    const dispatch = useDispatch()
    const fetchData = dispatch()
    const optimal = useState(state => state.portfolio.optimal)
    const minimal = useState(state => state.portfolio.minimal)
    const loading = useState(state => state.portfolio.loading)

    useEffect(() => fetchData())

    return { optimal, minimal, loading }
}

export default logic