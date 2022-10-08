import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, ClickAwayListener, Container, IconButton, Menu, MenuItem, Toolbar, Typography, Avatar } from '@mui/material';
import Link from 'next/link';
import { useStyles } from './NavbarStyles.js';

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
            label: 'Forum',
            href: '/forum'
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

    useEffect(() => {
        var curPage = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        setCurrentPage(curPage);
    }, [])

    return (
        <>
            <AppBar className={classes.header}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            onClick={handleOpenMenu}
                            color="info"   
                            className={classes.sidebarOpener}

                        >
                            <MenuIcon />
                        </IconButton> */}

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
                                <a rel="noreferrer">
                                    <img src="/assets/search.png" alt='search' />
                                </a>
                                <a rel="noreferrer">
                                    <img src="/assets/new.png" alt='notifications' />
                                </a>
                            </Box>
                            <Typography sx={{ color: '#DFE0EB', fontSize: "30px", textAlign: 'center', padding: '0 15px' }}>|</Typography>
                            <Box className={classes.profile}>
                                <Typography sx={{ color: 'black', textAlign: 'center' }}>FirstName LastName</Typography>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                onClick={handleOpenMenu}
                                color="info"   
                                className={classes.sidebarOpener}
                                href="/profile"
                            >
                                <Avatar>OP</Avatar>
                            </IconButton>
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}