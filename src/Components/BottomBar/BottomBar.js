import moment from 'moment';
import classes from './BottomBar.module.css'

const BottomBar = () => {
    
    const year = moment().format('YYYY');
    const link = <a href = '/'>BIOFICS</a>;

    return (
        <div className={classes.bottomBar}>
            @{year} {link} All Rights Reserved
        </div>
    );
}

export default BottomBar;