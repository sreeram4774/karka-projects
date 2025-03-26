import { Box, Button, Container, Typography, useTheme, useMediaQuery, Grid } from '@mui/material';
import React from 'react';
import EastIcon from '@mui/icons-material/East';
import CheckBackground from '../assets/images/CheckBackground.png';
import Shadow1 from '../assets/images/shadow1.png'
import Shadow2 from '../assets/images/shadow2.png'
import '../styles/Home.css'
import FormSubmission from './FormSubmission';

const Home = () => {
    const theme = useTheme();

    const containerStyles = {
        backgroundColor: "#110F0F",
        minHeight: "100vh",
        width: "100%",
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundImage: `url(${CheckBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

    };

    const overlayStyles = {
        '&::before': {
            content: '""',
            position: 'absolute',
            top: { xs: -150, sm: 0 },
            right: { xs: -150, sm: -50, md: 0 },
            width: { xs: '400px', sm: '300px', md: '300px', lg: "400px" },
            height: { xs: '400px', sm: '400px', md: '450px', lg: "500px" },
            background: `url(${Shadow1})`,
            pointerEvents: 'none',
            zIndex: 1,
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: { xs: -200, sm: -280, md: -280, lg: -180 },
            width: { xs: '500px', sm: '500px', md: '500px' },
            height: { xs: '400px', sm: '450px', md: '500px' },
            background: `url(${Shadow2}) no-repeat`,
            pointerEvents: 'none',
            zIndex: 1
        }
    };

    const titleStyles = {
        color: "white",
        fontSize: {
            xs: "2.5rem",
            sm: "3rem",
            md: "4rem",
            lg: "4.5rem"
        },
        [theme.breakpoints.down(425)]: {
            fontSize: "2.5rem"
        },
        [theme.breakpoints.down(375)]: {
            fontSize: "2rem"
        },
        fontWeight: "500",
        textAlign: "center",
        lineHeight: 1.2,
        mb: { xs: 2, sm: 3, md: 2, lg: 0 }
    };
    const verifyStyles = {
        color: "white",
        fontSize: {
            xs: "2rem",
            sm: "2.5rem",
            md: "3.5rem",
            lg: "4rem"
        },
        [theme.breakpoints.down(425)]: {
            fontSize: "2.5rem"
        },
        [theme.breakpoints.down(375)]: {
            fontSize: "2rem"
        },
        fontWeight: "500",
        textAlign: "center",
        lineHeight: 1.2,
        mb: { xs: 2, sm: 3, md: 2, lg: 0 }
    };

    const internGradientStyles = {
        background: 'linear-gradient(68deg, #01A8C4 -1.82%, #FBFE7F 106.59%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block',
    };
    const titleGradientStyles = {
        background: 'linear-gradient(218deg, #9DE8EE 25.05%, #9DE8EE 25.05%, #FA7C0B 51.71%, #9F8CED 79.45%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block',
    };

    const subtitleStyles = {
        color: "rgba(255, 255, 255, 0.60)",
        fontSize: {
            xs: "0.7rem",
            sm: ".8rem",
            md: ".8rem",
            lg: ".9rem",
        },
        fontWeight: 400,
        textAlign: { xs: "center", md: "left" },
        maxWidth: { xs: "100%", sm: "90%", md: "70%", lg: "70%" },
        [theme.breakpoints.down('375')]: {
            lineHeight: "20px",
        },
        [theme.breakpoints.down('367')]: {
            fontSize: "0.65rem"
        },
        // [theme.breakpoints.down('321')]: {
        //     fontSize:"0.7rem"
        // },
    };

    const buttonStyles = {
        backgroundColor: "#FFA800",
        borderRadius: "6px",
        color: "black",
        textTransform: "none",
        fontSize: { xs: "0.8rem", sm: ".8rem", md: "12px", lg: "12px" },
        padding: { md: "10px 22px", lg: "10px 22px" },
        '&:hover': {
            backgroundColor: "#FF9500",
        },
        whiteSpace: 'nowrap',
    };


    const handleClick = () => {
        const phoneNumber = "919385647154";
        const message = encodeURIComponent("I would like to know more about the refund process.");
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, "_blank");
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ ...containerStyles, ...overlayStyles }}>
            <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8, lg: 8 } }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h1" sx={titleStyles}>
                        <Box sx={{ display: "flex", alignItems: { xs: "center", sm: "end" }, justifyContent: "center", gap: 1, flexDirection: { xs: 'column', sm: "row" } }}>
                            <Box component="span" sx={internGradientStyles}>
                                Internships
                            </Box>
                            <Box component="span" sx={{
                                fontSize: {
                                    xs: "1.3rem",
                                    sm: "1.6rem",
                                    md: "2.2rem",
                                    lg: "2.5rem"
                                },
                                marginBottom: {
                                    xs: "4px",
                                    sm: "5px",
                                    md: "8px",
                                    lg: "9px"
                                }
                            }}>
                                with
                            </Box>
                        </Box>
                        <Box component="span" sx={titleGradientStyles}>
                            Job Simulations
                        </Box>
                        <Box sx={{
                            fontSize: {
                                xs: "2rem",
                                sm: "2.5rem",
                                md: "3.5rem",
                                lg: "4rem",
                            },
                        }}>
                            <Box component="span" sx={{
                                fontSize: {
                                    xs: "1.3rem",
                                    sm: "1.6rem",
                                    md: "2.2rem",
                                    lg: "2.5rem"
                                },
                            }}>
                                @
                            </Box>
                            <Typography variant="h1" sx={verifyStyles} mt={2}>
                                Verified
                                <br />
                                Companies
                            </Typography>
                        </Box>
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                        mt: 2,
                        px: { xs: 2, sm: 4, lg: 4 }
                    }}>
                        <Typography sx={subtitleStyles}>
                            <BoldText>InternTribe</BoldText> is a <BoldText>Virtual Internship Platform</BoldText> where <BoldText>Interns</BoldText> meet <BoldText>Companies</BoldText>. Online / Hybrid
                        </Typography>

                    </Box>

                    <a onClick={handleClickOpen} target="_blank" className="animation" style={{ marginTop: "20px", cursor: "pointer", fontSize: "14px" }}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        {/* Apply for Sponsorship */}
                        <div style={{ display: "flex", gap: "6px" }}>
                            <div>With</div>
                            <div className='sponsorship'/*  style={{ color: "#FFA800" }} */>100% Refund</div>
                        </div>
                    </a>

                    <FormSubmission open={open} handleClose={handleClose} />

                </Box>
            </Container>
        </Box>
    );
};

const BoldText = ({ children }) => (
    <Box component='span' sx={{ fontWeight: "bold", fontSize: { md: "13px", lg: "15px" }, color: "#9de8ee" }}>{children}</Box>
);

export default Home;
