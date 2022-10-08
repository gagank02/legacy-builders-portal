import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, ClickAwayListener, Container, IconButton, Menu, MenuItem, Toolbar, Typography, Avatar } from '@mui/material';
import Link from 'next/link';
import axios from 'axios';
import { useStyles } from './NavbarStyles.js';

const API_URL = 'http://localhost:3001'

export default function Navbar() {
    const classes = useStyles();
    const logo = '/assets/raf_logo.png'
    const logo_words = '/assets/raf_logo_words.png'

    const pagesData = [
        {
            label: 'Learn',
            href: '/learn'
        },
        {
            label: 'Community',
            href: '/community'
        },
        {
            label: 'Resources',
            href: '/resources'
        },
    ];

    const [needsMenu, setNeedsMenu] = useState(null);

    const handleOpenMenu = (event) => {
        setNeedsMenu(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setNeedsMenu(null);
    };

    const [currentPage, setCurrentPage] = useState("")
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    useEffect(() => {
        var curPage = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        setCurrentPage(curPage);

        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        }

        /*axios.get(`${API_URL}/auth/me`, config)
            .then(function (res) {
                console.log(res);
                let data = res.data.user;
                setFirstName(data.firstName);
                setLastName(data.lastName);
            })
            .catch(function (err) {
                console.log(err);
                window.location.href = '/login'
            });*/
    }, [])

    function logout() {
        localStorage.clear();
        window.location.href = '/login';
    }

    return (
        <>
            <AppBar className={classes.header}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>


                        <Box className={classes.logoBox}>
                            <Link href="/" passHref>
                                <a rel="noreferrer">
                                    <img src={logo} alt='logo_symbol' className={classes.logo} />
                                </a>
                            </Link>
                            <Link href="/" passHref>
                                <a rel="noreferrer">
                                    <img src={logo_words} alt='logo' className={classes.wordsLogo} />
                                </a>
                            </Link>
                        </Box>

                        <Box className={classes.pages}>
                            {pagesData.map(({ label, href }) => (
                                <Link key={label} href={href} passHref>
                                    <a rel="noreferrer" className={currentPage === label.toLowerCase() ? classes.activePage : classes.page}>
                                        <Typography>
                                            {label}
                                        </Typography>
                                    </a>
                                </Link>
                            ))}
                        </Box>

                        <Box className={classes.util}>
                            <Box className={classes.tools}>
                                {/* <a rel="noreferrer">
                                    <img src="/assets/search.png" alt='search' />
                                </a>
                                <a rel="noreferrer">
                                    <img src="/assets/new.png" alt='notifications' />
                                </a> */}
                                <a onClick={logout}><Typography className={classes.logout}>Log Out</Typography></a>
                            </Box>
                            <Typography sx={{ color: '#DFE0EB', fontSize: "30px", textAlign: 'center', padding: '0 15px' }}>|</Typography>
                            <Box className={classes.profile}>
                                <Typography className={classes.name}>{firstName} {lastName}</Typography>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    onClick={handleOpenMenu}
                                    color="info"
                                    className={classes.sidebarOpener}
                                    href="/profile"
                                >
                                    <Avatar>{firstName.length > 0 ? firstName.charAt(0) : 'OP'}</Avatar>
                                </IconButton>
                            </Box>
                        </Box>

                        <ClickAwayListener onClickAway={handleCloseMenu}>
                            <Box className={classes.menuBox}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    onClick={handleOpenMenu}
                                    color="primary"

                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={needsMenu}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(needsMenu)}
                                    onClose={handleCloseMenu}
                                    className={classes.menu}
                                >
                                    {pagesData.map(({ label, href }) => (
                                        <MenuItem>
                                            <Link key={label} href={href} passHref>
                                                <a rel="noreferrer" style={{
                                                    textDecoration: 'none',
                                                    color: '#000'
                                                }}>
                                                    <Typography>
                                                        {label}
                                                    </Typography>
                                                </a>
                                            </Link>
                                        </MenuItem>

                                    ))}
                                    <MenuItem>
                                        <Link key='logout' href='' passHref>
                                            <a onClick={logout} style={{
                                                textDecoration: 'none',
                                                color: '#000'
                                            }}>
                                                <Typography>
                                                    Log Out
                                                </Typography>
                                            </a>
                                        </Link>
                                    </MenuItem>
                                </Menu>
                            </Box>
                        </ClickAwayListener>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}