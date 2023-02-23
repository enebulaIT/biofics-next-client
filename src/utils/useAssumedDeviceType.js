import { useState, useEffect } from 'react';

export default function useAssumedDeviceType() {

  const [assumedDeviceType, setAssumedDeviceType] = useState('');

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
  

  // Callback function to assign value to assignedDevicetype state
  const findAssumedDevice = () => {
    const { width } = getWindowDimensions();

    if (width <= 600) setAssumedDeviceType('Mobile');
    else if (width <= 1200 && width > 600) setAssumedDeviceType('Tablet');
    else setAssumedDeviceType('Desktop');
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      findAssumedDevice();
  
      window.addEventListener('resize', () => {findAssumedDevice(window)});
      return () => window.removeEventListener('resize', () => {findAssumedDevice(window)});
    }
  }, [])

  return { assumedDeviceType };
}
