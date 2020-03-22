import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import style from './style.module.css'
import { TextField, Button } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import logic from './logic'
import stocks from './stocksList'

const form = () => {
    const { state, handleChange, handleClick } = logic()

    return (
        <Container className={style.container}>
            <Row className={style.row}>
                <Col md={8} lg={6}>
                    <form onSubmit={handleClick}>
                        <Autocomplete
                            className={style.TextField}
                            id="select-stock"
                            options={stocks}
                            getOptionLabel={option => option.name}
                            filterSelectedOptions
                            onChange={(event, newValue) => {
                                handleChange(newValue);
                            }}
                            renderInput={params => (
                                <TextField {...params} label="Type a company " margin="normal" variant='outlined' fullWidth />
                            )}
                        />
                        <Button className={style.button} color="primary" variant='contained' size='large'
                            onClick={handleClick} type='button'>save</Button>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}
export default form