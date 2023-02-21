import { Drawer, Box, List, ListItem, ListItemText } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { nav } from '../../nav';
import classes from './RightSideBar.module.css';
import Logo from '../../assets/images/Logo.png';

const RightSideBar = (props) => {
  const router = useRouter()

  const onClickItem = (e, item) => {
    router.push(item.to);
    props.hide(e);
  }

  return (
    <div>
      <Drawer
        anchor={'right'}
        open={props.open}
        onClose={props.hide}
      >
        <Box
          sx={{ width: 230, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', marginLeft: '8px' }}
          role='presentation'
          // onClick={props.hide}
          onKeyDown={props.hide}
        >
          <div className={classes.logo}>
            <Link href="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <List className={classes.list}>
            {nav.map((item, index) => (
              <ListItem className={classes.item} key={item.id} onClick={(e) => { onClickItem(e, item) }}>
                <ListItemText className={classes.itemText}>{item.label}
                </ListItemText>
              </ListItem>
            ))}
          </List>

          <div className={classes.bottomBar}>
            @2022 BIOFICS
          </div>
        </Box>
      </Drawer>
    </div>
  );
};

export default RightSideBar;
