import { useEffect, useState } from "react";
import Slider from "react-slick";
import classes from './SingleProduct.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@mui/material";
import MoreDetailsModal from '../MoreDetailsModal/MoreDetailsModal';
import appClasses from '../../../../App.module.css';
import { useRouter } from "next/router";

const SingleProduct = (props) => {
    const { productData, productIndex, handleGetQuote } = props;
    const router = useRouter();

    const [productImages, setProductImages] = useState([]);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const settings = {
        customPaging: function (i) {
            const imgSrc = productImages[i]?.attributes?.url;
            return (
                <a className={classes.smallImage}>
                    <img src={`${imgSrc}`} alt="product" />
                </a>
            );
        },
        dots: true,
        arrows: false,
        dotsClass: "slick-dots product-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    useEffect(() => {
        const images = [productData?.attributes?.Thumbnail_Image?.data ?? [], ...productData?.attributes?.Gallery_Image?.data ?? []];
        setProductImages(images)
    }, []);

    const getImageElements = () => {
        const elements = [];

        productImages.forEach(image => {
            elements.push(
                <div className={classes.item} key={image?.id}>
                    <div className={classes.imageWrapper}> 
                        <img src={`${image?.attributes?.url}`} alt="product" />
                    </div>
                </div>
            )
        })

        return elements
    }

    const handleMoreDetails = (id) => {
        router.push(`/product-details/${id}`)
    }

    const allignMentClassName = productIndex % 2 === 0 ? '' : 'inverted';
    const marginClassName = productIndex % 2 === 0 ? 'mr-20' : 'ml-20';

    return (
        <div className={`${classes.product} ${'single-product'} ${classes[allignMentClassName]}`}>
            <div className={` ${classes.imagesContainer}  ${classes[marginClassName]}`}>
                <Slider {...settings}>
                    {getImageElements()}
                </Slider>
            </div>


            <div className={classes.productInfo}>
                <div className={classes.descriptionWrapper}>
                    <div className={classes.text}>
                        <div className={classes.title}>
                            {productData?.attributes?.Title}
                        </div>

                        <div className={classes.description} dangerouslySetInnerHTML={{__html: productData?.attributes?.Excerpt}}>
                        </div>
                    </div>

                    <div className={classes.buttons}>
                        <Button className={appClasses.btn1} disableRipple onClick={() => handleMoreDetails(productData?.id)}>More Details</Button>
                        <Button className={appClasses.btn1} disableRipple onClick={() => handleGetQuote()}>Get Quote</Button>
                    </div>
                </div>
            </div>
            <MoreDetailsModal handleClose = {handleClose} open = {open} modalData = {{
                tite: productData?.attributes?.Title,
                modalBody: productData?.attributes?.Description,
                modalFooter: <Button className={appClasses.btn1} disableRipple onClick={() => handleGetQuote()}>Get Quote</Button>
            }}/>
        </div>
    )
}

export default SingleProduct;