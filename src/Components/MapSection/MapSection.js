import { useEffect, useState } from 'react';
import classes from './MapSection.module.css';
import api from '../../Api/publicApi';
import CaseStudy from './CaseStudy/CaseStudy';
import Image from 'next/image';


const MapSection = (props) => {
    const [selected, setSelected] = useState('guj');

    const handleMarkerClicked = (string) => {
        setSelected(string);
    }

    
    const [stateData, setStateData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            props.setLoading(true);
            try {
                const response = await api.get(`/api/usecases`);
                setStateData(response.data.data);
            } catch (err) {
                console.log({ ...err });
            } finally {
                props.setLoading(false);
            }
        }
        fetchData();
    }, []);

    const getSelectedStateData = () => {
        if(stateData.length === 0) return {}
        const selectedStateData = stateData.find(data => data?.attributes?.StateKey === selected);
        return selectedStateData?.attributes
    }



    if(stateData.length === 0) return null ;
    return (
        <div className={classes.mapContainer}>

            <div className={classes.map}>
                <img src='/images/map.png' alt="map" useMap='#interactiveMap'  />
                <map name='interactiveMap'>
                    <div className="dropdown fadeIn">
                        <area 
                            className={`${classes.jk} ${classes.area} ${selected === 'jk' ? classes.selected : ''}`} 
                            onClick={() => handleMarkerClicked('jk')} 
                            alt="state" />
                        <area 
                            className={`${classes.raj} ${classes.area} ${selected === 'raj' ? classes.selected : ''}`} 
                            onClick={() => handleMarkerClicked('raj')} 
                            alt="state" />
                        <area 
                            className={`${classes.guj} ${classes.area} ${selected === 'guj' ? classes.selected : ''}`} 
                            onClick={() => handleMarkerClicked('guj')} 
                            alt="state" />
                        <area 
                            className={`${classes.mp} ${classes.area} ${selected === 'mp' ? classes.selected : ''}`} 
                            onClick={() => handleMarkerClicked('mp')} 
                            alt="state" />
                        <area 
                            className={`${classes.mh} ${classes.area} ${selected === 'mh' ? classes.selected : ''}`} 
                            onClick={() => handleMarkerClicked('mh')} 
                            alt="state" />
                        <area 
                            className={`${classes.ka} ${classes.area} ${selected === 'ka' ? classes.selected : ''}`} 
                            onClick={() => handleMarkerClicked('ka')} 
                            alt="state" />
                        <area 
                            className={`${classes.teln} ${classes.area} ${selected === 'teln' ? classes.selected : ''}`} 
                            onClick={() => handleMarkerClicked('teln')} 
                            alt="state" />
                        <area 
                            className={`${classes.od} ${classes.area} ${selected === 'od' ? classes.selected : ''}`} 
                            onClick={() => handleMarkerClicked('od')} 
                            alt="state" />
                        <area 
                            className={`${classes.wb} ${classes.area} ${selected === 'wb' ? classes.selected : ''}`} 
                            onClick={() => handleMarkerClicked('wb')} 
                            alt="state" />
                        <area 
                            className={`${classes.up} ${classes.area} ${selected === 'up' ? classes.selected : ''}`} 
                            onClick={() => handleMarkerClicked('up')} 
                            alt="state" />
                    </div>
                </map>
            </div>

            <div className={classes.caseStudy}>
                <CaseStudy selectedStateData = {getSelectedStateData()} stateData = {stateData || {} } setSelected = {setSelected}/>
            </div>
        </div>
    )
}

export default MapSection;