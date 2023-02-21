import { Button } from '@mui/material';
import { useState } from 'react';
import GetQuoteModal from '../GetQuoteModal/GetQuoteModal';
import classes from './FloatingButton.module.css';

const FloatingButton = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className={classes.button}>
                <Button onClick = {handleOpen}>Get Quote</Button>
            </div>
            <GetQuoteModal open = {open} handleClose = {handleClose}/>
        </>
    )

}

export default FloatingButton;