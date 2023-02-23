import { useEffect, useState } from 'react';
import api from '../../Api/publicApi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from './Testimonials.module.css';
import useWindowDimensions from '../../utils/windowDimention';

const Testimonials = (props) => {
  const [testimonailsData, setTestimonialsData] = useState([]);
  const { width } = useWindowDimensions();
  const slidesToShow = width <= 1024 ? 1 : 2

  const settings = {
    dots: false,
    arrows: width <= 600 ? false : true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const fetchData = async () => {
      props.setLoading(true);
      try {
        const response = await api.get(`/api/testimonials?populate=*`);
        setTestimonialsData(response.data.data);
      } catch (err) {
        console.log({ ...err });
      } finally {
        props.setLoading(false);
      }
    };
    fetchData();
  }, []);

  const generateTestimonialsItems = () => {
    const elements = [];
    testimonailsData.forEach((testimonial) => {
      elements.push(
        <div key={testimonial.id} className={classes.testimonial}>
          <div className={classes.image}>
            <img
              className={classes.clientimg}
              src={`${testimonial.attributes.Image.data.attributes.url}`}
              alt='testimonial'
            />
          </div>
          <div className={classes.info}>
            <div className={classes.name}>{testimonial.attributes.Name}</div>

            <div className={classes.description}>
              {testimonial.attributes.Description}
            </div>
          </div>
        </div>
      );
    });

    return elements;
  };

  if (testimonailsData.length === 0) return null;

  return (
    <div className={classes.testimonails}>
      <div className={classes.textSection}>
        What they have
        <br /> to Say!
      </div>

      <div className={classes.testimonailsSection}>
        <Slider {...settings}>{generateTestimonialsItems()}</Slider>
      </div>
    </div>
  );
};

export default Testimonials;
