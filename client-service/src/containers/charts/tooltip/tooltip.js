import React from 'react';
import { Tooltip as TP, IconButton } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info';
import style from './style.module.css'

const tooltip = ({ tooltip }) => {
    return (
        <TP title={tooltip} placement="right" arrow >
            <IconButton aria-label="info" className={style.tooltip}>
                <InfoIcon color="primary" />
            </IconButton>
        </TP >
    )
}

export default tooltip