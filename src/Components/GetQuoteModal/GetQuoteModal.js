import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Form from './Form/Form';
import { Button } from '@mui/material';
import api from '../../Api/publicApi';
import { toast } from 'react-toastify';
import classes from './GetQuoteModal.module.css';
import appClasses from '../../App.module.css';
import { CloseIcon } from '../../assets/icons';

const initialFormState = {
    Name: "",
    Message: "",
    Email: "",
    Phone: ""
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    boxShadow: 24,
    p: 4,
};

export default function GetQuoteModal(props) {
    const { open, handleClose } = props;
    const [formData, setFormData] = React.useState(initialFormState);
    const [formHasError, setFormHasError] = React.useState(false);

    const validateData = () => {
        if (formData.Name === '' || formData.Message === '' || formData.Email === "") {
            setFormHasError(true);
            return false;
        } else {
            setFormHasError(false);
            return true;
        }
    }

    const handleSubmit = async () => {
        const isValid = validateData();
        if (isValid) {
            try {
                const data = {
                    data: {
                        Name: formData.Name,
                        Message: formData.Message,
                        Email: formData.Email,
                        Phone: formData.Phone
                    }
                }
                await api.post(`/api/quotation-requests`, data);
                toast.success('We have received your request, we will be in touch with you shortly.');
                handleClose();
                setFormData(initialFormState);
            } catch (err) {
                toast.error('Something went wrong. Please try again later')
            }

        }
    }


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className={classes.modal}>
                    <Button disableRipple className = {classes.closeIcon} onClick={handleClose}>
                        <CloseIcon/>   
                    </Button>
                    <Typography className={classes.title} id="modal-modal-title" variant="h6" component="h2">
                        Get Quote
                    </Typography>

                    <div className={classes.formContainer}>
                        <Form formData={formData} setFormData={setFormData} formHasError={formHasError} />
                    </div>

                    <div className={classes.modalFooter}>
                        <Button className={appClasses.btn1} disableRipple onClick={() => handleSubmit()}>Submit</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}