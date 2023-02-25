import { useEffect, useState } from 'react';
import Hero2 from '../../Components/Hero/Hero2';
import PageLoader from '../../Components/PageLoader/PageLoader';
import api from '../../Api/publicApi';
import SingleProduct from './SingleProduct/SingleProduct';
import classes from './Products.module.css';
import { useRouter } from 'next/router'

const defaultInnerBannerImg = '/images/defaultInnerBanner.jpg';

const Products = () => {
    const router = useRouter();
    const {id} = router.query;

    const [loading, setLoading] = useState(false);
    const [productsData, setProductData] = useState([]);
    const [subCatData, setSubCatData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/api/product-categories/${id}?populate=*`);
                setProductData(response.data.data);
            } catch (err) {
                console.log({ ...err });
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [id]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/api/product-sub-categories?populate=*`);
                setSubCatData(response.data.data);
            } catch (err) {
                console.log({ ...err });
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const getProductElements = () => {
        const elements = [];
        const subCatDataShortData = productsData?.attributes?.product_sub_categories?.data;
        const subCatIds = [];
        if(subCatDataShortData && subCatDataShortData?.length !== 0) {
            subCatDataShortData.forEach(data => subCatIds.push(data?.id))
        }
        console.log('subCatIds', subCatIds)

        subCatData.forEach((product, index) => {
            if(subCatIds.includes(product?.id)) {
                elements.push(
                    <SingleProduct
                        productCategoryId = {id} 
                        key={product.id} 
                        productData={product} 
                        productIndex={index} />
                );
            }
        });

        return elements;
    }

    return (
        <>
            <div className={classes.banner}>
                <Hero2 bannerData={{
                    Title: productsData?.attributes?.CategoryName,
                    image: productsData?.attributes?.BannerImage?.data?.attributes?.url || defaultInnerBannerImg
                }} />
            </div>
            
            <div className={classes.container}>
                {loading && <PageLoader />}


                <div className={`${classes.productsWrapper} ${classes.product_list}`}>
                    {getProductElements()}
                </div>
            </div>
        </>
    )
}

export default Products;