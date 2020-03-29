import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import style from './style.module.css'
import { TextField, Button } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import logic from './logic'
import stocks from './sp_500'

const Form = () => {
    const { value, setValue, handleClick, isDisabled } = logic()
    console.log('name seldcted is', value)

    return (
        <Container className={style.container}>
            <Row className={style.row}>
                <Col xs={10} className={style.col}>
                    <form onSubmit={handleClick}>

                        <Autocomplete
                            id="select-stock"
                            options={stocks}
                            getOptionLabel={option => option.name}
                            filterSelectedOptions
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            value={value}

                            renderInput={params => (
                                <TextField {...params} label="Select a company " margin="normal" variant='outlined' fullWidth className={style.textField} />
                            )}
                        />
                    </form>

                </Col>
                <Col xs={2} className={style.col}>
                    <Button className={style.button} variant='contained' size='large'
                        onClick={handleClick} disabled={!value} type='button'>save</Button>
                </Col>
            </Row>
        </Container>
    )
}
export default Form