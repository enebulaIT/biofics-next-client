import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import classes from './PageLoader.module.css';

export default function PageLoader() {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
    document.body.style.overflow = "hidden"
    
    return () => {
      document.body.style.overflow = "visible"
    }
  }, [])

  return (
      <div className={classes.pageLoader}>
        <Box className={classes.loader} sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
      </div>
  );
}