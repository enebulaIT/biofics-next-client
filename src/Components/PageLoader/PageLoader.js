import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import classes from './PageLoader.module.css';

export default function PageLoader() {
  return (
      <div className={classes.pageLoader}>
        <Box className={classes.loader} sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
      </div>
  );
}