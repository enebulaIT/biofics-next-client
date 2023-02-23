import { Button, Menu, MenuItem } from '@mui/material';
import { useState, useEffect } from 'react';
import { UserIcon, HamburgerIcon } from '../../assets/icons';
import { nav } from '../../nav';
import RightSideBar from '../RightSideBar/RightSideBar';
import classes from './Header.module.css';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image';

const Header = () => {

    const router = useRouter()

    const [anchorEl, setAnchorEl] = useState(null);
    const [showSideBar, setShowSideBar] = useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


    const handleUserMenuNavigate = (to) => {
        router.push(to);
        handleClose();
    }

    const generateMainNav = () => {
        return nav.map(link => {
            return <Link key={link.id} href={link.to}>{link.label}</Link>
        })
    }

    const generateUserMenu = () => {
        const menuList = [];
        // <MenuItem onClick={handleClose}>Profile</MenuItem>
        // <MenuItem onClick={handleClose}>My account</MenuItem>
        // <MenuItem onClick={handleClose}>Logout</MenuItem>

        menuList.push(<MenuItem onClick={() => handleUserMenuNavigate('/signin')}>Login</MenuItem>);
        return menuList;
    }



    const HideSideBar = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }
        setShowSideBar(false);
    }   


    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });


    const isSticky = (e) => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };


    return (
        <div className={`${classes.header} header-section`}>
            <div className={classes.logo}>
                <Link href="/">
                    <Image src="/images/Logo.png" alt="logo" width="145" height="100"/>
                </Link>
            </div>

            <div className={classes.navbar}>
                {generateMainNav()}
            </div>

            <div className={classes.multipleMenu}>
            {/* <div className={classes.userMenu}>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <UserIcon/>
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {generateUserMenu()}
                </Menu>
            </div> */}

            <div className={classes.hamburgerMenu}>
                <Button
                    id="basic-button"
                    onClick={() => setShowSideBar(true)}
                >
                    <HamburgerIcon/>
                </Button>

                <RightSideBar open={showSideBar} hide={HideSideBar}/>
            </div>
            </div>
        </div>
    )
}

export default Header;