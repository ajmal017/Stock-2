import React, { useState, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

const DialogContainer = (props) => {
    const [open, setOpen] = useState(props.open || false)

    return (
        <Fragment>
            <Button onClick={() => setOpen(true)} color={props.color || 'primary'} variant={props.variant || 'contained'}>{props.button}</Button>
            <Dialog onClose={() => setOpen(false)} aria-labelledby="Dialog-window" open={open} fullWidth maxWidth='md'>
                {props.children}
            </Dialog>
        </Fragment>
    )
}

export default DialogContainer