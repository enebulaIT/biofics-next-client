import classes from './SingleService.module.css';
import { Button } from "@mui/material";
import appClasses from '../../../App.module.css';

const SingleService = (props) => {
    const { serviceData, productIndex, handleOpen } = props;

    const handleMoreDetails = () => {

    }
    
    const allignMentClassName = productIndex % 2 === 0 ? '' : 'inverted';
    const marginClassName = productIndex % 2 === 0 ? 'mr-20' : 'ml-20';

    return (
        <div className={`${classes.product} ${'single-product'} ${classes[allignMentClassName]}`}>
            <div className={` ${classes.imagesContainer}  ${classes[marginClassName]}`}>
                <div className={classes.item}>
                    <div className={classes.imageWrapper}>
                        <img src={`${serviceData.attributes.Thumbnail_Image.data.attributes.url}`} alt="Service" />
                    </div>
                </div>
            </div>


            <div className={classes.productInfo}>
                <div className={classes.descriptionWrapper}>
                    <div className={classes.text}>
                        <div className={classes.title}>
                            {serviceData?.attributes?.Title}
                        </div>

                        <div className={classes.description} dangerouslySetInnerHTML = {{__html: serviceData?.attributes?.Excerpt}}>
                        </div>
                    </div>

                    <div className={classes.buttons}>
                        <Button className={`${appClasses.btn1}`} disableRipple onClick={handleMoreDetails}>More Details</Button>
                        <Button className={appClasses.btn1} disableRipple onClick={handleOpen}>Get Quote</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleService;