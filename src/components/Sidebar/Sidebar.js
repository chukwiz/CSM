import React from 'react';

import {Route,useRouteMatch,Switch,Redirect} from "react-router-dom"

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import {List, ListItem,ListItemText} from '@material-ui/core';
import Power from '@material-ui/icons/PowerSettingsNew';
import {NavLink} from 'react-router-dom';



import { fade} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import Dashboard from '../../views/Dashboard/Dashboard';
import Profile from '../../views/Profile/Profile';
import Notifications from '../../views/Notifications/Notifications';
import MarketCap from '../../views/MarketCap/MarketCap';
import Transactions from '../../views/Transactions/Transactions';
import Deposit from '../../views/Deposit/Deposit';
import Withdraw from '../../views/Withdraw/Withdraw';
import Avatar from '../Avatar/Avatar';
import Iframe from 'react-iframe';

import NavigationItems from '../Navigation/NavigationItems/NavigationItems'; 
import { logout } from '../../Home/components/UserFunctions/UserFunctions';
import history from '../../history';


const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth,
      backgroundColor: "#167c2c",
    boxShadow: "none",
    borderBottom: "0",
    // marginBottom: "15px",
    paddingTop: "6px",
    // zIndex: "0",
    color: "#e5e7e6",
    border: "0",
    padding: "6px 0",
    transition: "all 150ms ease 0s",
    minHeight: "30px",
    display: "block"
      
    },
  },

  navItem:{
    width: "70%",
    transition: "all 300ms linear",
    margin: "10px 15px 0",
    borderRadius: "3px",
    display: "block",
    /* padding: 10px 15px; */
    backgroundColor: "#e7e3ee13",
    textDecoration: "none",
    color:"#d8d8d8",
    bottom:5,
    position:"absolute",
    cursor:"pointer"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:"#131313"
  },
  content: {
    flexGrow: 1,
    marginTop:5
    // padding: theme.spacing(3),
  },

  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const Sidebar = (props) => {
const values= props.values

    const match = useRouteMatch()
    const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    const auth = localStorage.getItem("auth");
    console.log(auth)
    logout(auth)
    .then((res) => {
      localStorage.removeItem('auth')
      history.push('/login')
    })
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{display:"flex",flexDirection:"column",height:"100%",alignItems:"center",marginTop:20,position:"relative"}}>
      <Avatar style={{alignSelf: 'center',left:50}} values = {values} />
      {/* <div className={classes.toolbar} /> */}
      <Divider />
      <div style = {{width:"100%"}}>
             <NavigationItems routes = {props.routes}/>
      </div>
        <div className = {classes.navItem} onClick = {handleLogout}>
          <ListItem>
          <Power />
            <ListItemText>Log Out</ListItemText>
          </ListItem>
        </div>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar variant = "dense">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style = {{color:"#e5e7e6"}}>
            Welcome, {values.userData.firstName}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {/* <Navbar /> */}
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      {/* <Toolbar /> */}

      <main className={classes.content}>
        <div className={classes.toolbar} />
        
        <div
  style={{
    // height: 42,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    // boxSizing: "border-box",
    // border: "1px solid #56667F",
    // borderRadius: 4,
    textAlign: "right",
    // lineHeight: 14,
    // blockSize: 62,
    // fontSize: 12,
    fontFeatureSettings: "normal",
    textSizeAdjust: "100%",
    // boxShadow: "inset 0 -20px 0 0 #56667F",
    padding: 0,
    marginBottom: 10,
    width: "100%"
  }}
>
  <div style={{ height: 40, padding: 0, margin: 0, width: "100%" }}>
    <Iframe 
      url="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover="
      width="100%"
      height="36px"
      scrolling="auto"
      marginWidth={0}
      marginHeight={0}
      frameBorder={0}
      border={0}
      style={{ border: 0, margin: 0, padding: 0 }}
    />
  </div>
  
</div>
<div style = {{margin: "0px 10px"}}>
        <Switch>
                    <Route path = {`${match.path}/home`} exact render = {(props) => (<Dashboard {...props} values = {values} />)} />
                    <Route path = {`${match.path}/user`} exact render = {(props) => (<Profile {...props} values = {values} />)} />
                    <Route path = {`${match.path}/notifications`} exact component = {Notifications} />
                    <Route path = {`${match.path}/transactions`} exact component = {Transactions} />
                    <Route path = {`${match.path}/marketcap`} exact component = {MarketCap} />
                    <Route path = {`${match.path}/deposit`} exact component = {Deposit} />
                    <Route path = {`${match.path}/withdraw`} exact component = {Withdraw} />
                    <Redirect from = {`${match.path}`} to = {`${match.path}/home`} />

                    </Switch>
                    </div>
      </main>
    </div>
  );
}

// const sidebar = (props) => {
//     const classes = useStyles();
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };
    
//     return(
        
// )}

export default Sidebar;