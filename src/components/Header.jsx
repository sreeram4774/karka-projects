import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../assets/images/Logo.png';
import { Link } from '@mui/material';

const pages = ['Internship', 'Our Services', 'Pricing'];

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
                setScrolled(true); // Change to black when scrolled more than 50px
            } else {
                setScrolled(false); // Transparent when at the top
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // const handleScrollToPricing = () => {
    //     const pricingSection = document.getElementById("pricing");
    //     if (pricingSection) {
    //         pricingSection.scrollIntoView({ behavior: "smooth" });
    //     }
    // };


    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: scrolled ? 'black' : 'transparent',
                transition: 'background-color 0.3s ease',
            }}
        >
            <Container maxWidth="xl" sx={{ background: 'rgba(15, 15, 15, 0.40)', backdropFilter: 'blur(9px)' }}>
                <Toolbar disableGutters>
                    {/* Logo */}
                    <img src={Logo} alt="Logo" style={{ maxWidth: '50px' }} />

                    <Typography
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
                        Talenttribe
                    </Typography>

                    {/* Mobile menu button on the right */}
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
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Navigation items aligned to the right */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'flex-end', alignItems: 'center' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block', textTransform: "capitalize" }}
                            >
                                {page}
                            </Button>
                        ))}
                        <Button
                            variant="contained"
                            sx={{
                                ml: 2, background: "#FFA800", borderRadius: "50px", color: "black"
                            }}
                        >
                            Apply Now
                        </Button>

                        {/* <Button
                            key="Pricing"
                            onClick={handleScrollToPricing} // Call the function
                            sx={{ my: 2, color: 'white', display: 'block', textTransform: "capitalize" }}
                        >
                            Pricing
                        </Button> */}

                        {/* <a href='/#pricing'>Pricing</a> */}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
