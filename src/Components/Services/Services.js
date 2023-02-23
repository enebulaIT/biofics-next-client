import commonClasses from '../../App.module.css';
import { Box, Grid } from '@mui/material';
import ServiceImg1 from '../../../assets/images/services1.png';
import ServiceImg2 from '../../../assets/images/services2.png';
import ServiceImg3 from '../../../assets/images/services3.png';
import classes from './Services.module.css';

const Services = () => {
    return (
        <div className={classes.services}>
            <div className={commonClasses.pageTitle}>
                Strength
            </div>

            <div className={classes.servicesWrapper}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} columns={12}>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <div className={classes.service}>
                                <div className={classes.image}>
                                    <img alt = "service" src = {ServiceImg1}/>
                                </div>
                                <div className={classes.title}>
                                    Waste Management
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <div className={classes.service}>
                                <div className={classes.image}>
                                    <img alt = "service" src = {ServiceImg2}/>
                                </div>
                                <div className={classes.title}>
                                    Organic Farming Solution
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <div className={classes.service}>
                                <div className={classes.image}>
                                    <img alt = "service" src = {ServiceImg3}/>
                                </div>
                                <div className={classes.title}>
                                    Clean Technology
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default Services;