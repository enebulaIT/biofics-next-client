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
import { useState } from 'react';
import classes from './index.module.css';
import commonClasses from '../App.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [loading, setLoading] = useState(false);

    return (
        <div className={`${classes.home}`}>
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
                <Testimonials setLoading={setLoading} />
            </section>


            <section className={`${classes.videoplayer} ${commonClasses.container}`}>
                <FeatsAcheived setLoading={setLoading} />
                <VideoPlayer/>
            </section>
            
        </div>
    )
}
