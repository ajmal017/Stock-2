import React from 'react'
import style from './style.module.css'
import Chip from '@material-ui/core/Chip';
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { } from '../../redux/actions'

const Chips = () => {
    const symbols = useSelector(state => state.stockReducer.symbolList, shallowEqual)
    const dispatch = useDispatch()

    const handleDelete = (key) => { }
    if (symbols) {
        return (
            <Container><Row>
                {
                    symbols.map(value => (
                        <Chip
                            key={value}
                            color="primary"
                            clickable
                            className={style.chip}
                            label={value}
                            onDelete={() => handleDelete()}
                        />
                    ))
                }
            </Row></Container >
        )
    }
    else return <p> </p>
}



export default Chips
