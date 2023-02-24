import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import classes from './MoreDetailsModal.module.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props) {

    const { handleClose, open, modalData } = props;

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className={classes.modal}>
                    <Typography className={classes.title} id="modal-modal-title" variant="h6" component="h2">
                        {modalData?.tite}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className={classes.description} dangerouslySetInnerHTML={{__html: modalData?.modalBody}}></div>
                    </Typography>
                    <div className={classes.modalFooter}>
                        {modalData.modalFooter}
                    </div>
                </Box>
            </Modal>
        </div>
    );
}