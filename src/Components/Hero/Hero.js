import BgImage from '../../assets/images/bgBanner.png';
import bgLeavesImage from '../../assets/images/bgLeaves.png';
import { useEffect, useState } from 'react';
import classes from './Hero.module.css';
import api from '../../Api/publicApi';

const heroStyle = {
    backgroundImage: `url(${BgImage})`
}

const Hero = props => {

    const [content, setContent] = useState();
    const [loading, setLoading] = useState(false);
    const {bannerId} = props;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/api/inner-page-banners/${bannerId}?populate=*`);
                setContent(response?.data?.data);
            } catch (err) {
                console.log({ ...err });
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    console.log('content', content)

    return (
        <div className={classes.hero} style={heroStyle}>
            <div className={classes.image} style={{
                backgroundImage: `url(${bgLeavesImage})`,
            }}>
                {content?.attributes?.Title}
            </div>

            <div className={classes.description}>
                {content?.attributes?.Description}
            </div>
        </div>
    )
}

export default Hero;