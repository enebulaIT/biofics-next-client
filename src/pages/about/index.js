import classes from './About.module.css';
import api from '../../Api/publicApi';
import { useEffect, useState } from 'react';
import PageLoader from '../../Components/PageLoader/PageLoader';
import FeatsAcheived from '../../Components/FeatsAcheived/FeatsAcheived';
import OurTeam from '../../Components/OurTeam/OurTeam';
import Hero2 from '../../Components/Hero/Hero2';

const defaultInnerBannerImg = "/images/defaultInnerBanner.jpg"

const About = () => {

    const [aboutPageContent, setAboutPageContent] = useState();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/api/about-content?populate=*`);
                setAboutPageContent(response?.data?.data);
            } catch (err) {
                console.log({ ...err });
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    return (
        <>
            <Hero2 bannerData={{
                Title: "About Us",
                image: defaultInnerBannerImg
            }} />
            <div className={classes.container}>
                {loading && <PageLoader />}

                <div className={classes.aboutPage}>

                    <h6 className={classes.title}>{'Who we are?'}</h6>

                    <div className={classes.whoweare}>
                        <div className={classes.text} dangerouslySetInnerHTML={{ __html: aboutPageContent?.attributes?.WhoWeAre?.Content }}>

                        </div>

                        <div className={classes.image}>
                            <img src={`${aboutPageContent?.attributes?.WhoWeAre?.Image}`} alt="WhoWeAre" />
                        </div>
                    </div>

                    <h6 className={`${classes.title} ${classes.txt_align_center}`}>{'Our Mission'}</h6>

                    <div className={classes.attributes} >
                        <div className={classes.attributes_txt} dangerouslySetInnerHTML={{ __html: aboutPageContent?.attributes?.Mission }}>
                        </div>
                    </div>

                    <h6 className={`${classes.title} ${classes.txt_align_center}`}>{'Our Vision'}</h6>

                    <div className={classes.attributes} >
                        <div className={classes.attributes_txt} dangerouslySetInnerHTML={{ __html: aboutPageContent?.attributes?.Vision }}>
                        </div>
                    </div>

                    <FeatsAcheived setLoading={setLoading} />

                    <OurTeam setLoading={setLoading} />
                </div>

            </div>
        </>
    )
}

export default About;