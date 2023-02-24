import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect } from 'react';
import { useState } from 'react';
import api from '../../Api/publicApi';
import Hero2 from '../../Components/Hero/Hero2';
import classes from './FAQs.module.css';
import PageLoader from '../../Components/PageLoader/PageLoader';
import { Container } from '@mui/material';
import _ from 'lodash';
import FAQTypes from './FAQTypes';
import FAQContent from './FAQContent';

const defaultInnerBannerImg = '/images/defaultInnerBanner.jpg';

export default function FAQs() {
    const [faqTypeContent, setFaqTypeContent] = useState();
    const [faqContent, setFaqContent] = useState();
    const [loading, setLoading] = useState(false);
    const [activeFaqTypeTab, setActiveFaqTypeTab] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/api/faqs?populate=*`);
                const faqsData = response?.data?.data;
                let preparedFaqTypeData = {};
                let preparedFaqData = {};
                for(let faq of faqsData) {
                    if(!(faq.attributes.faq_type.data.id in preparedFaqTypeData)) {
                        preparedFaqTypeData[faq.attributes.faq_type.data.id] = {
                            id: faq.attributes.faq_type.data.id,
                            name: faq.attributes.faq_type.data.attributes.Name
                        }
                    }

                    // preparing faqData object
                    preparedFaqData[faq.id] = {
                        question: faq.attributes.question,
                        answer: faq.attributes.answer,
                        faq_type: faq.attributes.faq_type.data.id,
                    }
                }

                setFaqTypeContent(preparedFaqTypeData);
                setFaqContent(preparedFaqData);

                if(! _.isEmpty(preparedFaqTypeData)) {
                    setActiveFaqTypeTab(Object.keys(preparedFaqTypeData)[0]);
                }
            } catch (err) {
                console.log({ ...err });
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);
    
    return (
        <>
            <Hero2 bannerData={{
                Title: "FAQs",
                image: defaultInnerBannerImg
            }} />
            <div className={classes.container}>
                {loading && <PageLoader />}

                <Container sx = {{marginTop: '75px', marginBottom: "150px"}} maxWidth="lg">
                    <FAQTypes faqTypeContent = {faqTypeContent || {}} activeFaqTypeTab = {activeFaqTypeTab} setActiveFaqTypeTab = {setActiveFaqTypeTab}/>
                    <FAQContent faqContent = {faqContent || {}} activeFaqTypeTab = {activeFaqTypeTab}/>
                </Container>
            
            </div>
        </>
    );
}