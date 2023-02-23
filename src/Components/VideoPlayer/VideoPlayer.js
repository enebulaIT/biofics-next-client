import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import commonClasses from '../../App.module.css';

const VideoPlayer = () => {
    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
          setHasWindow(true);
        }
      }, []);
    return (
        <>
            <div className={commonClasses.pageTitle}>What we are?</div>
            
            {hasWindow && <ReactPlayer style = {{marginTop: "100px"}} width="100%" height="80vh" url='https://www.youtube.com/watch?v=NUDKW6VrF9I' />}
        </>
    )
}

export default VideoPlayer;
