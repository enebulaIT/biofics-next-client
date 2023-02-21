import { FormHelperText, Grid, TextField } from "@mui/material";
import classes from './Form.module.css';

const ErrorMessageComponent = () => {
    return <FormHelperText style={{ color: 'red' }} id="component-error-text">Required Field. Please enter.</FormHelperText>;
}

const Form = (props) => {
    const { formData, setFormData, formHasError } = props;
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <TextField
                        value={formData?.Name}
                        onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
                        label='Name*'
                        className={classes.input}
                        fullWidth={true}
                        error={formHasError && formData.Name === ''}
                    />
                    {formHasError && formData.Name === '' ? <ErrorMessageComponent /> : null}


                </Grid>
                <Grid item xs={4}>
                    <TextField
                        value={formData?.Email}
                        onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
                        label='Email*'
                        className={classes.input}
                        fullWidth={true}
                        error={formHasError && formData.Email === ''}
                    />
                    {formHasError && formData.Email === '' ? <ErrorMessageComponent /> : null}

                </Grid>
                <Grid item xs={4}>
                    <TextField
                        value={formData?.Phone}
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        onChange={(e) => setFormData({ ...formData, Phone: e.target.value })}
                        label='Phone*'
                        className={classes.input}
                        fullWidth={true}
                        error={formHasError && formData.Phone === ''}
                    />
                    {formHasError && formData.Phone === '' ? <ErrorMessageComponent /> : null}
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        value={formData.Message}
                        onChange={(e) => setFormData({ ...formData, Message: e.target.value })}
                        type='text'
                        label='Message'
                        className={classes.input}
                        fullWidth={true}
                        multiline={true}
                        rows={6}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default Form;