import React, { useState, Fragment } from 'react';
import Button from '@material-ui/core/Button';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const DialogContainer = (props) => {
    const [open, setOpen] = useState(true)

    return (
        <Fragment>
            <Button onClick={() => setOpen(true)} color='primary' variant='contained'>{props.button}</Button>
            <Dialog onClose={() => setOpen(false)} aria-labelledby="Dialog-window" open={open}>
                {props.children}
            </Dialog>
        </Fragment>
    )
}

export default DialogContainer