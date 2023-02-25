import { useEffect, useState } from "react";
import api from '../../Api/publicApi';
import { useRouter } from 'next/router'
import classes from './ProductCategories.module.css';
import mobileClasses from './Mobile_ProductCategories.module.css';
import Button from '@mui/material/Button';
import useAssumedDeviceType from "../../utils/useAssumedDeviceType";
import appClasses from '../../App.module.css';
const bgLeavesImage = "/images/bgLeaves.png";

const ProductCategories = (props) => {
    const router = useRouter()
    const { assumedDeviceType } = useAssumedDeviceType();

    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            props.setLoading(true);
            try {
                const response = await api.get(`/api/product-categories?populate=*`);
                setProductData(response.data.data);
            } catch (err) {
                console.log({ ...err });
            } finally {
                props.setLoading(false);
            }
        }
        fetchData();
    }, []);


    const generateProductItems = () => {
        const elements = [];
        productData.forEach((product, index) => {
            let dynamicClass = '';
            if (index % 2 === 0) dynamicClass = 'right';
            else dynamicClass = 'left'
            if (assumedDeviceType !== "Mobile") {
                elements.push(
                    <div style={{
                        backgroundImage: `url(${bgLeavesImage})`
                    }
                    } className={`${classes.singleProduct} ${classes[dynamicClass]}`}>
                        <div className={classes.textContent}>
                            <div className={classes.title}>
                                {product.attributes.CategoryName}
                            </div>
                            <div className={classes.description}>
                                {product.attributes.Description}
                            </div>
                            <Button className={appClasses.btn1} disableRipple onClick={() => handleEnquire(product?.id)}>View Product</Button>
                        </div>

                        <div className={classes.imageContent}>
                            <img alt="product" src={`${product?.attributes?.Image?.data?.attributes?.url}`} />
                        </div>
                    </div >
                )
            } else {
                elements.push(
                    <div 
                        style={{backgroundImage: `url(${bgLeavesImage})`}} 
                        className={`${mobileClasses.singleProduct} ${mobileClasses[dynamicClass]}`}>
                            <div className={mobileClasses.contentWrapper}>
                                <div className={appClasses.pageTitle}>
                                    {product.attributes.CategoryName}
                                </div>
                                <div className={mobileClasses.imageContent}>
                                    <img alt="product" src={`${product?.attributes?.Image?.data?.attributes?.url}`} />
                                </div>
                                <span className={mobileClasses.description}>
                                    {product.attributes.Description}
                                </span>
                                <Button className={appClasses.btn1} disableRipple onClick={() => handleEnquire(product?.id)}>View Product</Button>
                            </div>
                    </div >
                )
            }
        });
        return elements;
    }

    const handleEnquire = (id) => {
        router.push('/product-category/' + id);
    }

    if (productData?.length === 0) return null;

    return (
        <div className={classes.products}>
            {generateProductItems()}
            {/* <Button className={classes.viewAll} disableRipple onClick={handleViewAll}>View All</Button> */}
        </div>
    )
}

export default ProductCategories;