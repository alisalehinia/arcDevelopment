import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import logo from "../../assets/logo.svg"
import { useState } from "react";
import { AppBar, Button, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Tab, Tabs, Toolbar, useMediaQuery, useScrollTrigger } from "@material-ui/core";
import { Link } from "react-router-dom";
import { SwipeableDrawer } from '@material-ui/core';
import { MenuRounded } from "@material-ui/icons";

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}
const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "1.25em"
        }
    },
    logo: {
        height: "8em",
        [theme.breakpoints.down("md")]: {
            height: "7em"
        },
        [theme.breakpoints.down("xs")]: {
            height: "5.5em"
        }
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    tabContainer: {
        marginLeft: "auto",
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "25px",
        marginRight: "50px",
        height: "45px",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: "white"
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        color: "white",
        "&:hover": {
            opacity: 1,
            color: "white"
        }
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawerIcon: {
        height: "50px",
        width: "50px"
    },
    drawer: {
        backgroundColor: theme.palette.common.blue
    },
    drawerItem: {
        ...theme.typography.tab,
        color: "white",
        opacity: 0.7
    },
    drawerItemSelected: {
        "& .MuiListItemText-root": {
            opacity: 1
        }
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange,
        ...theme.typography.tab,
        color: "white",
    },
    appbar: {
        zIndex: theme.zIndex.modal + 1
    }

}))
export default function Header({ value, setValue, selectedIndex, setSelectedIndex }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);

    // const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer, setOpenDrawer] = useState(false)
    const changeHandler = (e, newValue) => {
        setValue(newValue)
    }
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    }
    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpenMenu(false);
        setSelectedIndex(i);
    }
    const handleClose = (e) => {
        setAnchorEl(null);
        setOpenMenu(false)
    }
    const menuOptions = [{ name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
    { name: "Custom Software Development", link: "/customsoftware", activeIndex: 1, selectedIndex: 1 },
    { name: "Android/ios App Development", link: "/mobileapps", activeIndex: 1, selectedIndex: 2 },
    { name: "Website Development", link: "/websites", activeIndex: 1, selectedIndex: 3 },
    ]
    const routes = [
        { name: "Home", link: "/", activeIndex: 0 },
        {
            name: "Services", link: "/services", activeIndex: 1, ariaOwns: anchorEl ? "simple-menu" : undefined,
            ariaPopup: anchorEl ? "true" : undefined, mouseOver: (event) => handleClick(event),
        },
        { name: "The Revolution", link: "/revolution", activeIndex: 2 },
        { name: "About Us", link: "/about", activeIndex: 3 },
        { name: "Contact Us", link: "/contact", activeIndex: 4 },
    ]
    useEffect(() => {

        [...menuOptions, ...routes].forEach(route => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (value !== route.activeIndex) {
                        setValue(route.activeIndex);
                        if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
                            setSelectedIndex(route.selectedIndex)
                        }
                    }
                    break;
                case "/estimate":
                    setValue(5);
                    break
                default:
                    break
            }
        })
    }, [value, menuOptions, selectedIndex, routes])

    const tabs = (
        <React.Fragment>
            <Tabs value={value} onChange={changeHandler} className={`${classes.tabContainer} , ${classes.tab}`}>
                {routes.map((route, index) => (
                    <Tab key={`${route}${index}`} className={classes.tab} component={Link} to={route.link} label={route.name} aria-owns={route.ariaOwns}
                        aria-haspopup={route.ariaPopup} onMouseOver={route.mouseOver} />
                ))}
            </Tabs>
            <Button component={Link} to="estimate" onClick={() => { setValue(5) }} variant="contained" color="secondary" className={classes.button}>
                Free Estimate
            </Button>
            <Menu id="simple-menu"
                anchorEl={anchorEl}
                open={openMenu}
                MenuListProps={{ onMouseLeave: handleClose }}
                onClose={handleClose}
                classes={{ paper: classes.menu }}
                elevation={0}
                keepMounted
                style={{ zIndex: 1302 }}
            >
                {
                    menuOptions.map((option, i) => (
                        <MenuItem key={`${option}${i}`} component={Link} to={option.link} classes={{ root: classes.menuItem }}
                            onClick={(event) => { handleMenuItemClick(event, i); setValue(1); handleClose() }}
                            selected={i === selectedIndex && value === 1}
                        >
                            {option.name}
                        </MenuItem>
                    ))

                }
            </Menu>
        </React.Fragment>
    )
    const drawer = (
        <React.Fragment>
            <SwipeableDrawer open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{ paper: classes.drawer }}
            >
                <div className={classes.toolbarMargin} />
                <List disablePadding>
                    {routes.map(route => (
                        <ListItem classes={{ selected: classes.drawerItemSelected }} key={`${route}${route.activeIndex}`} divider button component={Link} to={route.link} selected={value === route.activeIndex} onClick={() => { setOpenDrawer(false); setValue(route.activeIndex) }}>
                            <ListItemText className={classes.drawerItem} disableTypography>
                                {route.name}
                            </ListItemText>
                        </ListItem>
                    ))}

                    <ListItem classes={{ root: classes.drawerItemEstimate, selected: classes.drawerItemSelected }} divider onClick={() => { setOpenDrawer(false); setValue(5) }} button component={Link} to="/estimate">
                        <ListItemText disableTypography>Estimate</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                <MenuRounded className={classes.drawerIcon} />
            </IconButton>
        </React.Fragment>
    )
    return <React.Fragment>
        <ElevationScroll>
            <AppBar position="fixed" className={classes.appbar}>
                <Toolbar disableGutters>
                    <Button component={Link} to="/" className={classes.logoContainer} disableRipple onClick={() => setValue(0)}>
                        <img src={logo} alt="logo" className={classes.logo} />
                    </Button>
                    {matches ? drawer : tabs}
                </Toolbar>
            </AppBar>

        </ElevationScroll>
        <div className={classes.toolbarMargin} />
    </React.Fragment>
}