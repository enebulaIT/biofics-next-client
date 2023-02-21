import classes from './Hero.module.css';

const Hero2 = props => {

    const { bannerData } = props;

    return (
        <div className={classes.hero2banner}>
            <div className={classes.bannerImg} style={{ backgroundImage: `url(${bannerData?.image})` }}>

                <div className={classes.title}>
                    {bannerData.Title}
                </div>
            </div>
        </div>
    )
}

export default Hero2;