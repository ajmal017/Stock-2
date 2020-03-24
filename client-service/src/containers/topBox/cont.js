import React from 'react'
import { Paper } from '@material-ui/core'
import { Container, Row, Col } from 'react-bootstrap'
import style from './style.module.css'


const cont = ({value}) => {

    return (
        <Paper elevation={11}>
            <Container fluid style={{'paddingTop':'1rem','paddingBottom':'1rem'}} >
                <Row style={{'justifyContent':'center'}}>
                    <h4 style={{'padding':0, 'marging':0}}> {value}</h4>
                </Row>
            </Container>
        </Paper>
    )
}

export default cont
