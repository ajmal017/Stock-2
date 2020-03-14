import React from 'react'
import logic from './logic'
import { Paper } from '@material-ui/core'
import { Container, Row, Col } from 'react-bootstrap'
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';
import TrendingDownRoundedIcon from '@material-ui/icons/TrendingDownRounded';
import style from './style.module.css'
import { green } from '@material-ui/core/colors';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';


const StockCards = () => {
    const { stocks, handleDelete } = logic()

    return (
        <Container fluid className={style.section}>
            <Row>
                {/* {stocks.map((item, i) => (
                    <Col md={6} lg={4} xl={3} className={style.col}>
                        <StockCard data={item} handleDelete={handleDelete}></StockCard>
                    </Col>
                ))} */}
            </Row>
        </Container>
    )
}


export default StockCards

