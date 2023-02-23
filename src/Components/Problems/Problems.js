import classes from './Problems.module.css';
import commonClasses from '../../App.module.css';
import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import api from '../../Api/publicApi';
import useWindowDimensions from '../../utils/windowDimention';

const Problems = (props) => {

    const [problemData, setProblemData] = useState([]);
    const { width } = useWindowDimensions();

    useEffect(() => {
        const fetchData = async () => {
            props.setLoading(true);
            try {
                const response = await api.get(`/api/how-are-we-solving-the-problems?populate=*`);
                setProblemData(response.data.data);
            } catch (err) {
                console.log({ ...err });
            } finally {
                props.setLoading(false);
            }
        }
        fetchData();
    }, [])

    const generateProblemItems = () => {
        const elements = [];
        problemData.forEach(problem => {
            elements.push(
                <Grid item xs={6} sm={6} md={6} lg={4} xl={4} key={problem.id}>
                    <div className={classes.problemItem}>
                        <div className={classes.image}>
                            <img src = {`${problem.attributes.Image.data.attributes.url}`} alt = "problem"/>
                        </div>

                        <div className={classes.text}>
                            <div className={classes.title}>
                                { problem.attributes.Title }   
                            </div>
                            <div className={classes.description}>
                                { problem.attributes.Description }   
                            </div>
                        </div>
                    </div>
                </Grid>
            )
        });
        return elements;
    }

    return (
        <div className={classes.problems}>
            <div className={commonClasses.pageTitle}>
                {width <= 820 ? 'Why Us?' : 'How are we solving the problem?'}
            </div>

            <Box className={classes.problemsContainer} sx={{ flexGrow: 1 }}>
                <Grid container columns={12} spacing={{ xs: 2, md: 3 }} rowSpacing={width <= 820 ? 0 : 25}>
                    { generateProblemItems() }
                </Grid>
            </Box>
        </div>
    );
}

export default Problems;