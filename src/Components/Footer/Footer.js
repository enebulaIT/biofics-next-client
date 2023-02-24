import { Grid } from "@mui/material";
import Image from 'next/image';
import classes from './Footer.module.css';
import { footerMenu } from "../../nav";
import Link from 'next/link';
import NewsLetterForm from '../../Components/NewsLetterForm/NewsLetterForm';

const Footer = () => {
    const generateMenu = () => {
        return footerMenu.map(link => {
            return <Link key={link.id} href={link.to}>{link.label}</Link>
        })
    }

    return (
        <div className={`${classes.footer}`}>
            <div className={classes.footerWrapper}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <div className={classes.logo}>
                            <Link href="/">
                            <Image src="/images/Logo.png" alt="logo" width="200" height="180"/>
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <div className={classes.column}>
                            <div className={classes.title}>
                                Cert./Logos
                            </div>

                            <div className={classes.certs}>
                                <div>
                                <Image src="/images/cert1.png" alt="logo" width="145" height="50"/>
                                </div>

                                <div>
                                <Image src="/images/cert2.png" alt="logo" width="80" height="100"/>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} >
                        <div className={classes.column}>
                            <div className={classes.title}>
                                Useful Links
                            </div>

                            <div className={classes.nav}>
                                {generateMenu()}
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <div className={`${classes.column} ${classes.form}`}>
                            <div className={classes.title}>
                                NewsLetter
                            </div>

                            <div className={classes.newsletterForm}>
                                <NewsLetterForm />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer;