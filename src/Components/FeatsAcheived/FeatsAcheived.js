import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import api from '../../Api/publicApi';
import smallImg from '../../assets/images/featsImg.png';
import classes from './FeatsAcheived.module.css';

const FeatsAcheived = (props) => {
    
    // const [featsData, setFeatsData] = useState(JSON.parse(localStorage.getItem('featsData')) || []);
    const [featsData, setFeatsData] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    
    // const cleanup = () => {
    //     console.log('JSON.stringify(featsData)', featsData)
    //     localStorage.removeItem('featsData');
    //     localStorage.setItem('featsData', JSON.stringify(featsData))
    // }

    useEffect(() => {

        if(featsData?.length === 0) {
            const fetchData = async () => {
                props.setLoading(true);
                try {
                    const response = await api.get(`/api/feats?populate=*`);
                    setFeatsData(response?.data?.data);
                    setDataLoaded(true);
                } catch (err) {
                    console.log({ ...err });
                } finally {
                    props.setLoading(false);
                }
            }
            fetchData();
        }

        // return cleanup();
    }, []);

    function getRandomArbitrary(min, max) {
        return  Math.floor(Math.random() * (max - min) + min);
    }

    const setRandomInterval = (intervalFunction, minDelay, maxDelay) => {
        let timeout;
      
        const runInterval = () => {
          const timeoutFunction = () => {
            intervalFunction();
            runInterval();
          };
      
          const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
      
          timeout = setTimeout(timeoutFunction, delay);
        };
      
        runInterval();
      
        return {
          clear() { clearTimeout(timeout) },
        };
      };


    useEffect( () => {      
        featsData.forEach(data => {

            if(data.attributes.shouldIncrease === true) {
                setRandomInterval(() => {
                    // console.log('data.attributes.Value', data.attributes.Value)
                    // data.attributes.Value = Number(data.attributes?.Value) + data.attributes.IncreaseByValue; 

                    const currentFeatsData = [...featsData];
                    const i = currentFeatsData.findIndex(feat => feat.id === data.id);
                    console.log('tester', i)
                    currentFeatsData[i].attributes.Value =  Number(currentFeatsData[i].attributes.Value) + getRandomArbitrary(currentFeatsData[i].attributes.IncreaseByValue - 2, currentFeatsData[i].attributes.IncreaseByValue) 

                    setFeatsData(currentFeatsData)
                }, data.attributes.IncreaseInDuration - 1 * 1000, data.attributes.IncreaseInDuration * 1000 )
            }

        })

    }, [dataLoaded])

    const getFeat = (id) => {
        const foundFeat = featsData?.find(feat => feat.id === id);
        return (
            <div className={classes.stat}>
                <div className={classes.number}>
                    {foundFeat?.attributes?.Value + (foundFeat?.attributes?.Unit ?? '')}
                </div>
                <div className={classes.description}>
                    {foundFeat?.attributes?.Title}
                </div>
            </div>
        )
    }

    const getIcon = (id) => {
        const foundFeat = featsData?.find(feat => feat.id === id);
        return foundFeat?.attributes?.Icon?.data?.attributes?.url || smallImg;
    }



    return (
        <div className={classes.featsWrapper}>
            <Box sx={{ flexGrow: 1 , display: 'flex' }}>
                <Grid container spacing={2} columns={12}>
                    <Grid item md={4} xs={12}>
                        <div className={classes.feat}>
                            <div className={classes.icon}>
                                <img src={getIcon(featsData[0]?.id)} alt="satisfied" />
                            </div>

                            {getFeat(featsData[0]?.id)}
                        </div>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <div className={classes.feat}>
                            <div className={classes.icon}>
                                <img src={getIcon(featsData[1]?.id)} alt="satisfied" />
                            </div>

                            {getFeat(featsData[1]?.id)}
                        </div>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <div className={classes.feat}>
                            <div className={classes.icon}>
                                <img src={getIcon(featsData[2]?.id)} alt="satisfied" />
                            </div>

                            {getFeat(featsData[2]?.id)}
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default FeatsAcheived;