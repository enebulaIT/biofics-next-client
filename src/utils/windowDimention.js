import { useState, useEffect } from 'react';

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  function getWindowDimensions() {
    if (typeof window !== 'undefined') {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height,
      };
    } else {
      return {
        width: 1024,
        height: 1024,
      };
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {

      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', () => handleResize());
      return () => window.removeEventListener('resize', () => handleResize());
    }
  }, []);

  return windowDimensions;
}
