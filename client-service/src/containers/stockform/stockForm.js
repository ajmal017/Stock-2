import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import style from './style.module.css'
import { TextField, Button } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import logic from './logic'
import stocks from './stocks_list.json'

const Form = () => {
    const { value, setValue, handleClick } = logic()
    console.log('value of stockform', value)

    return (
        <Container fluid className={style.container}>
            <Row className={style.row}>
                <Col md={10} className={style.col}>
                    <form onSubmit={handleClick}>
                        <Autocomplete
                            id="select-stock"
                            options={stocks}
                            autoSelect={true}
                            getOptionLabel={option => option.name}
                            filterSelectedOptions
                            onChange={
                                (event, newValue) => {
                                    setValue(newValue);

                                }
                            }
                            value={value}

                            renderInput={params => (
                                <TextField {...params} label="Select a company " margin="normal" variant='outlined' fullWidth className={style.textField} />
                            )}
                        />
                    </form>

                </Col>
                <Col md={2} className={style.col}>
                    <Button fullWidth className={style.button} color="secondary" variant='contained' size='large'
                        onClick={handleClick} disabled={!value} type='button'>save</Button>
                </Col>
            </Row>
        </Container>
    )
}
export default Form