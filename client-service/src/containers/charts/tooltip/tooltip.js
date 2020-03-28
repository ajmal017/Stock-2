import React from 'react';
import { Tooltip as TP, IconButton } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info';

const tooltip = ({ tooltip }) => {
    return (
        <TP title={tooltip} placement="right" arrow >
            <IconButton aria-label="info" style={{ 'marginRight': '2rem' }}>
                <InfoIcon color="primary" />
            </IconButton>
        </TP>
    )
}

export default tooltip