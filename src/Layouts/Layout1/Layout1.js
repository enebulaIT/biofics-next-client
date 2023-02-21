import Topbar from '../../Components/TopBar/Topbar';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import classes from './Layout1.module.css';
import BottomBar from '../../Components/BottomBar/BottomBar';

const Layout = ({children}) => {
    return (
        <div>
            <Topbar/>
            <Header />
                <div className={classes.main}>
                    {children}
                </div>
            <Footer />
            <BottomBar />
        </div>
    )
}

export default Layout;