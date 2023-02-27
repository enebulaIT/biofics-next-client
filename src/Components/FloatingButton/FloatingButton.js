import { Button } from '@mui/material';
import { useState } from 'react';
import GetQuoteModal from '../GetQuoteModal/GetQuoteModal';
import classes from './FloatingButton.module.css';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { PHONE } from '@/constants';
import useAssumedDeviceType from '@/utils/useAssumedDeviceType';

const FloatingButton = () => {
    const { assumedDeviceType } = useAssumedDeviceType();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const handleCall = () => {
        if(window) {
            window.open(`tel:${PHONE.P1_FOR_LINK}`, '_self');
        }
    }

    if(assumedDeviceType !== 'Mobile') {
        return (
            <>
                <div className={classes.slits}>
                    <div onClick={handleOpen} className={classes.slit}>
                        <MailIcon />
                        <div className={classes.text}>Send Inquiry</div>
                    </div>
    
                    <div onClick={handleCall} className={`${classes.slit} ${classes.phoneslit}`}>
                        <CallIcon />
                        <div className={classes.text}>Call</div>
                    </div>
                </div>
    
                <GetQuoteModal open={open} handleClose={handleClose} />
            </>
        )
    } else {
        return null
    }


}

export default FloatingButton;