import { useState, useEffect } from 'react';
import classes from './OurTeam.module.css';
import { Box, Grid } from '@mui/material';
import api from '../../Api/publicApi';

const OurTeam = (props) => {
  const [teamsData, setTeamsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      props.setLoading(true);
      try {
        const response = await api.get(`/api/teams?populate=*`);
        setTeamsData(response?.data?.data);
      } catch (err) {
        console.log({ ...err });
      } finally {
        props.setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={classes.ourTeamWrapper}>
      <h6 className={`${classes.title} ${classes.txt_align_center}`}>
        {'Team that you trust!'}
      </h6>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={12}>
          {teamsData.map((item) => {
            return (
              <Grid item md={4} sm={6} xs={6}>
                <div className={classes.teams}>
                  <div className={classes.team_img}>
                    <img
                      src={`${item?.attributes?.Image?.data?.attributes?.formats?.thumbnail?.url}`}
                      alt='team'
                    />
                  </div>
                  <h1 className={classes.name_title}>
                      {item?.attributes?.Title}
                    </h1>
                    <p className={classes.designation}>
                      {item?.attributes?.Designation}
                    </p>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default OurTeam;
