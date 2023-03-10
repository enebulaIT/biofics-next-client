import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import PageLoader from '@/Components/PageLoader/PageLoader'
import Banner from '@/Components/Banner/Banner'
import MapSection from '@/Components/MapSection/MapSection'
import ProductCategories from '@/Components/ProductCategories/ProductCategories'
import FeaturedProducts from '@/Components/FeaturedProducts/FeaturedProducts'
import OurClients from '@/Components/OurClients/OurClients'
import Testimonials from '@/Components/Testimonials/Testimonials'
import FeatsAcheived from '@/Components/FeatsAcheived/FeatsAcheived'
import VideoPlayer from '@/Components/VideoPlayer/VideoPlayer'
import { useEffect, useState } from 'react';
import GetQuoteModal from '@/Components/GetQuoteModal/GetQuoteModal';
import Cookies from 'universal-cookie';

import classes from './index.module.css';
import commonClasses from '../App.module.css'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [loading, setLoading] = useState(false);
  const cookies = new Cookies();


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {

    if(localStorage) {
        if(!cookies.get('hasPopOpenedOnce')) {
            setTimeout(() => {
              handleOpen(true)
              cookies.set('hasPopOpenedOnce', true, {path: '/', expires: new Date(Date.now()+86400)});
            }, 2000)
        }
    }
  }, [loading])


    return (
        <div className={`${classes.home}`}>
            <Head>
        <title>My page title</title>
      </Head>
            {loading && <PageLoader />}

            <Banner setLoading={setLoading} />
            <section className={`${classes.banner} ${commonClasses.container}`}>
                <MapSection setLoading={setLoading} />
            </section>

            <section className={`${classes.generalSection} ${commonClasses.container}`}>
                <ProductCategories setLoading={setLoading} />
            </section>

            <section className={`${classes.generalSection}`}>
                <FeaturedProducts setLoading={setLoading} />
            </section>

            <section className={`${classes.clients}`}>
                <OurClients setLoading={setLoading} />
            </section>

            <section className={`${classes.testimonials}`}>
                <Testimonials setLoading={setLoading} />
            </section>

            <section className={`${classes.feats}`}>
                <FeatsAcheived setLoading={setLoading} />
            </section>


            <section className={`${classes.videoplayer} ${commonClasses.container}`}>
                
                <VideoPlayer/>
            </section>
            <GetQuoteModal open={open} handleClose={handleClose} />

        </div>
    )
}
