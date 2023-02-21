import { Grid } from "@mui/material";
import Logo from '../../assets/images/Logo.png';
import Cert1 from '../../assets/images/cert1.png';
import Cert2 from '../../assets/images/cert2.png';
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
                                <img src={Logo} alt="Logo" />
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
                                    <img src={Cert1} alt="certificate" />
                                </div>

                                <div>
                                    <img src={Cert2} className={classes.bulb} alt="certificate" />
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