import React from 'react'
import style from './style.module.css'
import Chip from '@material-ui/core/Chip';
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { removeStock } from '../../redux/actions'

const Chips = () => {
    const symbols = useSelector(state => state.stockReducer.stocksSelected, shallowEqual)
    const dispatch = useDispatch()
    console.log(symbols)
    if (symbols) {
        return (
            <Container><Row>
                {
                    Object.entries(symbols).map(([key, value]) => (
                        <Chip
                            key={value.symbol}
                            color="primary"
                            clickable
                            className={style.chip}
                            label={value.name}
                            onDelete={() => dispatch(removeStock([key]))}
                        />
                    ))
                }
            </Row></Container >

        )
    }
    else return <p> </p>
}



export default Chips
