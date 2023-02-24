import { useEffect, useState } from 'react';
import Hero2 from '../../Components/Hero/Hero2';
import PageLoader from '../../Components/PageLoader/PageLoader';
import api from '../../Api/publicApi';
import classes from './ProductVariant.module.css';
import GetQuoteModal from '../../Components/GetQuoteModal/GetQuoteModal';
import appClasses from '../../App.module.css';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

const Logo = '/images/Logo.png';
const defaultInnerBannerImg = '/images/defaultInnerBanner.jpg';


const ProductVariant = () => {
    const { id } = useRouter().query;
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [productsData, setProductData] = useState([]);

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/api/products/${id}?populate[0]=Solutions.Image.media`);
                const response2 = await api.get(`/api/products/${id}?populate=*`);
                const preParedObj = { ...response2?.data?.data }
                preParedObj.attributes.Solutions = response?.data?.data?.attributes?.Solutions;
                setProductData(preParedObj);
            } catch (err) {
                console.log({ ...err });
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [id]);

    const getSolutionsSection = () => {
        const solutions = productsData?.attributes?.Solutions || null;
        const HTML = [];
        if (solutions) {
            solutions.forEach(solution => {
                const imageData = solution?.Image?.data?.attributes;

                HTML.push(
                    <div key={solution.id} className={classes.singleSolution}>
                        <div className={classes.solutionImage}>
                            <img src={imageData?.url || Logo} alt={imageData?.alternativeText}></img>
                        </div>

                        <div className={classes.solutionText}>
                            <span className={appClasses.pageTitleSmall}>
                                {solution.Title}
                            </span>

                            <div className={classes.solutionStmt}>
                                <span className={classes.Description}>{solution.Description}</span>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        return HTML;
    }

    return (
        <>
            <div className={classes.banner}>
                <Hero2 bannerData={{
                    Title: productsData?.attributes?.Title,
                    image: defaultInnerBannerImg
                }} />
            </div>

            <div className={classes.container}>
                {loading && <PageLoader />}
                
                {/* <div className={classes.productDescWrapper}>
                    <div className={appClasses.pageTitle}> Your Problem</div>
                    <div className={classes.productDesc}> {productsData?.attributes?.Description} </div>
                </div> */}

                <div className={classes.problem}>
                    <div className={appClasses.pageTitle}> Your Problem</div>
                    <div className={classes.problemStmts} dangerouslySetInnerHTML={{ __html: productsData?.attributes?.Problems }}></div>
                </div>

                <div className={classes.solution}>
                    <div className={appClasses.pageTitle}> Our Solution</div>
                    <div className={classes.solutionsWrapper}>
                        {getSolutionsSection()}
                    </div>
                </div>

                <div className={classes.getQuote}>
                    <div className={classes.getQuoteText}>
                        <div className={appClasses.pageTitle}> Get Quote</div>
                        <div className={classes.getQuoteText}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                    </div>

                    <div className={classes.getQuoteAction}>
                        <Button onClick = {() => router.push('/contact')} className={appClasses.btn1}>Contact Us</Button>
                    </div>

                </div>
            </div>

            <GetQuoteModal open={open} handleClose={handleClose} />
        </>
    )
}

export default ProductVariant;