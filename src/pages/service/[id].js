import { useEffect, useState } from 'react';
import Hero2 from '../../Components/Hero/Hero2';
import PageLoader from '../../Components/PageLoader/PageLoader';
import api from '../../Api/publicApi';
import SingleService from './SingleService/SingleService';
import classes from './ServiceDetailpage.module.css';
import GetQuoteModal from '../../Components/GetQuoteModal/GetQuoteModal';
import { useRouter } from 'next/router'

const defaultInnerBannerImg = '/images/defaultInnerBanner.jpg';



const ServiceDetailpage = () => {
    const router = useRouter();
    const { id } = router.query;

    const [loading, setLoading] = useState(false);
    const [productsData, setProductData] = useState([]);
    const [subCatData, setSubCatData] = useState([]);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/api/services?populate=*`);
                setProductData(response.data.data);
            } catch (err) {
                console.log({ ...err });
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/api/service-categories/${id}?populate=*`);
                setSubCatData(response.data.data);
            } catch (err) {
                console.log({ ...err });
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [id]);

    const getProductElements = () => {
        const elements = [];
        const subCatDataShortData = subCatData?.attributes?.services?.data;
        const productIds = [];
        if(subCatDataShortData && subCatDataShortData?.length !== 0) {
            subCatDataShortData.forEach(data => productIds.push(data?.id))
        }

        productsData.forEach((product, index) => {
            if(productIds.includes(product?.id)) {
                elements.push(
                    <SingleService handleGetQuote = {handleOpen} key={product.id} productData={product} productIndex={index} />
                );
            }
        });

        return elements;
    }

    return (
        <>
            <div className={classes.banner}>
                <Hero2 bannerData={{
                    Title: subCatData?.attributes?.Title,
                    image: subCatData?.attributes?.Page_Banner_Image?.data?.attributes?.url || defaultInnerBannerImg
                }} />
            </div>
            
            <div className={classes.container}>
                {loading && <PageLoader />}


                <div className={`${classes.productsWrapper} ${classes.product_list}`}>
                    {getProductElements()}
                </div>
            </div>

            <GetQuoteModal open = {open} handleClose = {handleClose}/>
        </>
    )
}

export default ServiceDetailpage;