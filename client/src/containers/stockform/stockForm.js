import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import style from './style.module.css'
import { TextField, Button } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import logic from './logic'

const form = () => {
    const { state, handleChange, handleClick } = logic()
    const { symbol } = state

    return (
        <Container className={style.container}>
            <Row className={style.row}>
                <Col md={8}>
                    <form>
                        <Autocomplete
                            className={style.TextField}
                            id="select-stock"
                            options={state.stocks}
                            getOptionLabel={option => option.name}
                            value={symbol}
                            filterSelectedOptions
                            onChange={(event, newValue) => {
                                handleChange(newValue);
                            }}
                            renderInput={params => (
                                <TextField {...params} label="Type a company    " margin="normal" fullWidth />
                            )}
                        />
                        <Button className={style.button} color="primary" variant='contained' size='large'
                            onClick={handleClick}>save</Button>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}
export default form