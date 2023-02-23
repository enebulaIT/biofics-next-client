import { useEffect, useState } from 'react';
import api from '../../Api/publicApi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from './OurClients.module.css';
import commonClasses from '../../App.module.css';
import useWindowDimensions from '../../utils/windowDimention';

const OurClients = (props) => {
  const [clientsData, setClientsData] = useState([]);
  const { width } = useWindowDimensions();

  const slides = width <= 600 ? 1 : width > 600 && width <= 1024 ? 3 : 6;

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    const fetchData = async () => {
      props.setLoading(true);
      try {
        const response = await api.get(`/api/clients?populate=*`);
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
          <img
            src={`${client.attributes.Logo.data.attributes.url}`}
            alt='client'
          />
        </div>
      );
    });

    return elements;
  };

  if (clientsData.length === 0) return null;

  return (
    <div className={classes.clients}>
      <div className={commonClasses.pageTitle}>Our Clients</div>

      <div className={`${classes.clientWrapper} clients-page`}>
        <Slider {...settings}>{generateClientsItems()}</Slider>
      </div>
    </div>
  );
};

export default OurClients;
