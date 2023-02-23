import { useEffect, useState } from 'react';
import api from '../../Api/publicApi';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from './Banner.module.css';
import useAssumedDeviceType from '../../utils/useAssumedDeviceType';
import { useRouter } from 'next/router'


const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000
};


const Banner = (props) => {

    const { assumedDeviceType } = useAssumedDeviceType();
    const router = useRouter()

    const [bannerData, setBannerData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            props.setLoading(true);
            try {
                const response = await api.get(`/api/banners?populate=*`);
                const bannerData = response?.data?.data || [] ;
                const parsedBannerData = [];
                
                bannerData.forEach(banner => {
                    if( banner.attributes.BannerSize === assumedDeviceType) {
                        parsedBannerData.push(banner);
                    }
                });
                setBannerData(parsedBannerData);
            } catch (err) {
                console.log({ ...err });
            } finally {
                props.setLoading(false);
            }
        }
        fetchData();
    }, [assumedDeviceType]);

    const handleClick = (event, link) => {
        if(link && link?.length) {
            router.push(link);
        }
    }

    const generateBannerItems = () => {
        const elements = [];

        bannerData.forEach(banner => {
            elements.push(
                <div className={classes.item} key={banner.id} onClick = {(event) => handleClick(event, banner?.attributes?.LinkToPage)}>
                    <img src={`${banner?.attributes?.BannerImage?.data?.attributes?.url}`} alt="banner" />
                </div>
            )
        });
        return elements;
    }

    if (bannerData.length === 0) return null;

    return (
        <div className = "banner">
            <Slider {...settings}>
                {generateBannerItems()}
            </Slider>
        </div>
    )
}

export default Banner;