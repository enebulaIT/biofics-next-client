import React from 'react';
import commonClasses from '../../../App.module.css';
import classes from './CaseStudy.module.css';
import { DoneIcon, TestIcon, RecycleIcon, CityIcon } from '../../../assets/icons';
import { Grid } from '@mui/material';

const CaseStudy = (props) => {
    const { selectedStateData } = props;

    const getStateNames = () => {
       const HTML = [<span key = "0" className={classes.selectedState}>{selectedStateData?.StateName} <span key = "0" className={classes.separator}> | </span> </span>];
       Object.keys(props.stateData).forEach((state, index) => {
            const stateName = props.stateData[state]?.attributes?.StateName;
            const stateKey = props.stateData[state]?.attributes?.StateKey;

            if(stateName !== selectedStateData?.StateName) {
                if(index !== Object.keys(props.stateData)?.length - 1) {
                    HTML.push(
                        <span 
                            className={classes.notselectedState} 
                            key = {stateKey} 
                            onClick={() => props.setSelected(stateKey)}>
                                {stateName}  <span className={classes.separator}> | </span> 
                        </span>) 
                } else {
                    HTML.push(<span className={classes.notselectedState} key = {stateKey} onClick={() => props.setSelected(stateKey)}>{stateName}</span>) 
                }
            }
        })
        return HTML
    }

    return (
        <div>
            <div className={`${commonClasses.pageTitle} ${classes.title}`}>
                {getStateNames()}
            </div>

            <div className={classes.oneliner}>
                {selectedStateData?.Achievement}
            </div>

            <div className={classes.majors}>
                <div className={classes.cities}>
                    Major Cities: {selectedStateData?.MajorCities}
                </div>

                <div className={classes.majorClients}>
                    Major Clients: {selectedStateData?.MajorClients}
                </div>

            </div>

            <div className={classes.stats}>
                <Grid container rowSpacing={6}>
                    <Grid item xs={6}>
                        <div className={classes.statsWrapper}>
                            <div className={classes.icon}>
                                <DoneIcon />
                            </div>

                            <div className={classes.stat}>
                                <div className={classes.number}>
                                    {selectedStateData?.NumberOfProjects}
                                </div>

                                <div className={classes.text}>
                                    NUMBER OF PROJECTS
                                </div>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={6}>
                        <div className={classes.statsWrapper}>
                            <div className={classes.icon}>
                                <CityIcon />
                            </div>

                            <div className={classes.stat}>
                                <div className={classes.number}>
                                    {selectedStateData?.NumberOfCities}
                                </div>

                                <div className={classes.text}>
                                    NUMBER OF CITIES
                                </div>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={6}>
                        <div className={classes.statsWrapper}>
                            <div className={classes.icon}>
                                <RecycleIcon />
                            </div>

                            <div className={classes.stat}>
                                <div className={classes.number}>
                                    {selectedStateData?.WasteProcessingPerDay}
                                </div>

                                <div className={classes.text}>
                                    WASTE PROCESSING/DAY
                                </div>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={6}>
                        <div className={classes.statsWrapper}>
                            <div className={classes.icon}>
                                <TestIcon />
                            </div>

                            <div className={classes.stat}>
                                <div className={classes.number}>
                                    {selectedStateData?.UpcommingNewProjects}
                                </div>

                                <div className={classes.text}>
                                    UPCOMMING NEW PROJECTS
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default CaseStudy;