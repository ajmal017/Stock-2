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

const table = (props) => {
    const { tooltip, loading, blur, columns, title, rows, pl } = props
    let placeholder = null
    if (blur) placeholder = <p className={style.placeholder}>{pl ? pl : "Select a Company"}</p>

    return (
        <Container fluid className={style.cont}>
            <Row className={style.row}>
                <Paper elevation={11} className={blur ? style.blur : style.paper}>
                    <h5 className={style.title}> {title}
                        <TP tooltip={tooltip}></TP>
                        {loading ? <CircularProgress size={20} ></CircularProgress> : <p></p>}
                    </h5>
                    <TableContainer>
                        <Table stickyHeader className={style.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    {columns.map(item => (
                                        <TableCell align="center">{item}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow key={index}>
                                        {row.map(item => (
                                            <TableCell align="center">{item}</TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
                {placeholder}
            </Row>
        </Container >

    );
}

export default table