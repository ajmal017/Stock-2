import React from 'react';
import { ResponsiveContainer } from 'recharts';
import style from './style.module.css'
import { Paper } from '@material-ui/core'
import TP from '../tooltip/tooltip'
import CircularProgress from '@material-ui/core/CircularProgress';

const chartContainer = (props) => {
    let placeholder = null
    if (props.blur) placeholder = <p className={style.placeholder}>{props.placeholder ? props.placeholder : "Select a Company"}</p>
    return (
        <div>
            <Paper elevation={11} className={props.blur ? style.blur : style.paper} data-testid='chart'>
                <h5 className={style.title}>{props.title}
                    <TP tooltip={props.tooltip}></TP>
                    {props.loading ? <CircularProgress size={20} ></CircularProgress> : <p></p>}
                </h5>
                <ResponsiveContainer width="100%" height={400}>
                    {props.children}
                </ResponsiveContainer>
            </Paper>
            {placeholder}
        </div>
    );
}

export default chartContainer
