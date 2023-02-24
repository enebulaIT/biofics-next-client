import { useEffect, useState } from 'react';
import api from '../../Api/publicApi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from './FeaturedProducts.module.css';
import commonClasses from '../../App.module.css';
import useWindowDimensions from '../../utils/windowDimention';
import FeaturedProduct from './FeaturedProduct';
import { Button } from '@mui/material';
import { useRouter } from 'next/router'

const FeaturedProducts = (props) => {
  
  const [clientsData, setClientsData] = useState([]);
  const { width } = useWindowDimensions();
  const router = useRouter()
  const [slides, setSlides] = useState(0);

  // const slides = width <= 600 ? 1 : width > 600 && width <= 1024 ? 2 : 4;
  console.log('width', width)
  // let slides;
  // switch(width) {
  //   case width <= 600: 
  //     slides = 1; 
  //     break;
  //   case width > 600 && width <= 1200: 
  //     slides = 3; 
  //     break;
  //   case width > 1200: 
  //     slides = 4; 
  //     break;
  //   default: slides = 2;
  // }

  useEffect(() => {
    let slides;
    if(width <= 600) {
      slides = 1; 
    } else if(width > 600 && width <= 1200) {
      slides = 2; 
    } else if(width > 1200) {
      slides = 4; 
    }
    setSlides(slides)

  }, [width])

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    // speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
  };

  useEffect(() => {
    const fetchData = async () => {
      props.setLoading(true);
      try {
        const response = await api.get(`/api/products?populate=*`);
        setClientsData(response.data.data);
      } catch (err) {
        console.log({ ...err });
      } finally {
        props.setLoading(false);
      }
    };
    fetchData();
  }, []);

  const generateClientsItems = () => {
    const elements = [];
    clientsData.forEach((client) => {
      elements.push(
        <div className={classes.item} key={client.id}>
          <FeaturedProduct productData = {client}/>
        </div>
      );
    });

    return elements;
  };

  if (clientsData.length === 0) return null;

  return (
    <div className={classes.clients}>
      <div className={commonClasses.pageTitle}>Our Products</div>

      <div className={`${classes.clientWrapper} clients-page`}>
        <Slider {...settings}>{generateClientsItems()}</Slider>
      </div>

        <div className={commonClasses.sectionBtn}>

      <Button onClick={() => router.push('/product-categories')} className={`${commonClasses.linkBtn}`}>Explore all</Button>
        </div>
    </div>
  );
};

export default FeaturedProducts;
