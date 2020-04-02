import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import style from './style.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import TP from '../tooltip/tooltip'
import CircularProgress from '@material-ui/core/CircularProgress';

const table = ({ data, tooltip, loading, blur }) => {
    let placeholder = null
    if (blur) placeholder = <p className={style.placeholder}>{placeholder ? placeholder : "Select a Company"}</p>

    return (
        <Container fluid className={style.cont}>

            <Row className={style.row}>
                <Col md={6}>
                    <Paper className={blur ? style.blur : style.paper}>
                        <h5 className={style.title}> European Options Pricing
                        <TP tooltip={tooltip}></TP>
                            {loading ? <CircularProgress size={30} ></CircularProgress> : <p></p>}
                        </h5>
                        <TableContainer>
                            <Table stickyHeader className={style.table} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="right">Type</TableCell>
                                        <TableCell align="right">$ Price</TableCell>
                                        <TableCell align="right">$ Strike</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.type}</TableCell>
                                            <TableCell align="right">{row.price}</TableCell>
                                            <TableCell align="right">{row.strike}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                    {placeholder}
                </Col>
            </Row>
        </Container >

    );
}

export default table