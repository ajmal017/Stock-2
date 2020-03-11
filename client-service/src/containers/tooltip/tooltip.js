import React from 'react';
import { Paper, Tooltip as TP, IconButton } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info';

const tooltip = ({ tooltip }) => {
    return (
        <TP title={tooltip} placement="right" arrow>
            <IconButton aria-label="delete">
                <InfoIcon color="primary" />
            </IconButton>
        </TP>
    )
}

export default tooltip