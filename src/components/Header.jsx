import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../assets/images/Logo.png';
import { Button } from '@mui/material';

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [scrolled, setScrolled] = React.useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: scrolled ? 'black' : 'transparent',
                transition: 'background-color 0.3s ease',
            }}
        >
            <Container maxWidth="100%" sx={{ background: 'rgba(15, 15, 15, 0.40)', backdropFilter: 'blur(9px)' }}>
                <Toolbar disableGutters>
                    {/* Logo */}
                    {/* <img src={Logo} alt="Logo" style={{ maxWidth: '50px' }} /> */}
                    <Box sx={{ width: { xs: "40%", sm: '20%', md: "15%", lg: "15%" }, display:"flex", alignItems:"center"}}>
                        <img
                            src={Logo}
                            alt="Logo"
                            style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                    </Box>
                    {/* <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                            marginLeft: "10px",
                        }}
                    >
                        InternTribe
                    </Typography> */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' }, justifyContent: 'flex-end' }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', sm: 'none' } }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <a href="#ai-career" style={{ textDecoration: 'none', color: 'inherit' }}>Verified Companies</a>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <a href="#pricing" style={{ textDecoration: 'none', color: 'inherit' }}>Pricing</a>
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <a href="#verified-companies" style={{ margin: '0 10px', textDecoration: 'none', color: 'white' }}>
                            Verified Companies
                        </a>
                        <a href="#pricing" style={{ margin: '0 10px', textDecoration: 'none', color: 'white' }}>
                            Pricing
                        </a>
                        <a href="#apply-now" style={{ textDecoration: 'none' }}>
                            <Button
                                variant="contained"
                                sx={{
                                    ml: 2, background: "#FFA800", borderRadius: "50px", color: "black"
                                }}
                            >
                                Apply Now
                            </Button>
                        </a>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
