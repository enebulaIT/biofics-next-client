import { FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, PhoneIcon, TwitterIcon } from '../../assets/icons';
import { EMAIL, PHONE, SOCIAL_URLS } from '../../constants';
import classes from './Topbar.module.css';

const Topbar = () => {
    return (
        <div className={classes.topbar}>
            <div className={classes.content}>
                {/* <div className={classes.socials}>
                    <a href={SOCIAL_URLS.IN}> <LinkedinIcon /> </a>
                    <a href={SOCIAL_URLS.FB}> <FacebookIcon /> </a>
                    <a href={SOCIAL_URLS.IG}> <InstagramIcon /> </a>
                    <a href={SOCIAL_URLS.TW}> <TwitterIcon /> </a>
                </div> */}

                <div className={classes.phone}>
                    <div>
                        <PhoneIcon />
                    </div>
                    <a href={`tel:${PHONE.P1_FOR_LINK}`}>
                        {PHONE.P1}
                    </a>
                </div>

                <div className={classes.email}>
                    <div>
                        <MailIcon />
                    </div>
                    <a href={`mailto:${EMAIL.E1}`}>
                        {EMAIL.E1}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Topbar;