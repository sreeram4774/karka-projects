import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, Container, Paper, Typography, useMediaQuery } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from "typewriter-effect";
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';


import Cup from '../assets/images/Cup.png';
import Star from '../assets/images/star.svg';
import image1 from '../assets/logos/image1.png';
import image2 from '../assets/logos/image2.png';
// import image3 from '../assets/logos/image3.png';
import image4 from '../assets/logos/image4.png';
import image5 from '../assets/logos/image5.png';
import image6 from '../assets/logos/image6.png';
import { useState } from 'react';
import FormSubmission from './FormSubmission';


const Career = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [cycle, setCycle] = useState(0);
    // const [typingFinished, setTypingFinished] = useState(false); // Track if typing has finished


    React.useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: false,
            offset: 150,
            mirror: true,
            // anchorPlacement: "top-bottom",

        });

        // const handleScroll = () => {
        //     AOS.refreshHard(); // Refresh AOS on scroll
        // };

        const handleScroll = () => {
            clearTimeout(window.AOSRefreshTimer);
            window.AOSRefreshTimer = setTimeout(() => {
                AOS.refresh();
            }, 200);
        };


        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const CertificatePaper = styled(Paper)(({ theme }) => ({
        padding: "0px 16px",
        display: "inline-flex",
        alignItems: "center",
        backgroundColor: "#ffa800",
        color: "#000",
        borderRadius: "3px",
        boxShadow: "none",
        gap: "8px",
        width: "fit-content",
        [theme.breakpoints.down('md')]: {
            width: '100%',
            justifyContent: 'center',
        }
    }));

    const StyledCup = styled('img')(({ theme }) => ({
        width: '32px',
        height: '32px',
        objectFit: 'contain',
        marginTop: '-20px',
        [theme.breakpoints.down('md')]: {
            width: '30px',
            height: '30px',
        },
    }));

    const CompanyButton = styled(Button)(({ theme }) => ({
        backgroundColor: "transparent",
        color: "#fff",
        textTransform: "capitalize",
        width: "100%",
        maxWidth: "fit-content",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: "10px",
        gap: '8px',
        '&:hover': {
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderColor: "#fff"
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: "160px",
            fontSize: "14px",
            padding: "16px 8px"
        }
    }));

    const CompanyLogos = [image2, image1, image4, image5, image6];

    if (isMobile) {
        [CompanyLogos[2], CompanyLogos[3]] = [CompanyLogos[3], CompanyLogos[2]];
    }

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
        <section id="verified-companies" >
            <Box
                sx={{
                    backgroundColor: "#000",
                    color: "#fff",
                    py: { xs: 4, sm: 8 },
                    px: { xs: 2, sm: 4 }
                }}>
                <Container maxWidth="xl">

                    <Grid container spacing={4}>
                        {/* Title Section */}
                        <Grid item xs={12} sm={12}>
                            <Box sx={{

                                textAlign: { xs: "center", sm: "left" },
                                mb: 3,
                            }}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: {
                                            xs: "28px",
                                            sm: "25px",
                                            md: "30px",
                                            lg: "40px",
                                        },
                                        fontWeight: 500,
                                        lineHeight: { xs: "38px", sm: "38px", md: "40px", lg: "56px" },
                                        letterSpacing: "-0.02em",
                                        [theme.breakpoints.down('425')]: {
                                            fontSize: "25px",
                                        },
                                        [theme.breakpoints.down('375')]: {
                                            fontSize: "20px",
                                            lineHeight: "30px"
                                        },
                                    }}
                                >
                                    Become a
                                </Typography>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontSize: {
                                            xs: "27px",
                                            sm: "27px",
                                            md: "32px",
                                            lg: "42px",
                                        },
                                        fontWeight: 700,
                                        lineHeight: { xs: "38px", md: "56px" },
                                        letterSpacing: "-0.02em",
                                        [theme.breakpoints.down('425')]: {
                                            fontSize: "27px",
                                        },
                                        [theme.breakpoints.down('375')]: {
                                            fontSize: "22px",
                                            lineHeight: "32px"
                                        },
                                    }}
                                >
                                    <Typewriter
                                        options={{
                                            strings: [
                                                `<span style="color: #ffa800">Startup Engineer</span>`,
                                                `<span style="color: #00b4d8">Freelancer</span>`,
                                                `<span style="color: #ffa800">Open Source Contributor</span>`,
                                                `<span style="color: #00b4d8">Junior Engineer</span>`,
                                                `<span style="color: #ffa800">Gig Worker</span>`,
                                            ],
                                            autoStart: true,
                                            loop: true,
                                            delay: 75,
                                        }}
                                    />
                                    {/* <Box sx={{ fontSize: "2.3rem", color: "#ffa800" }}>
                                        {cycle === 0 ? (
                                            // First cycle: Only "Startup Engineer" typed with typewriter effect
                                            <Typewriter
                                                options={{
                                                    strings: ["Startup Engineer"],
                                                    autoStart: true,
                                                    loop: false,
                                                    delay: 75,
                                                }}
                                                onInit={(typewriter) => {
                                                    typewriter
                                                        .callFunction(() => setCycle(1)) // Move to second cycle after finishing first one
                                                        .start();
                                                }}
                                            />
                                        ) : (
                                            // Second cycle: Typewriter effect for all titles
                                            <Box sx={{ fontSize: "2.3rem", color: "white" }}>
                                                <Typewriter
                                                    options={{
                                                        strings: [
                                                            "<span style='color: #ffa800'>Startup Engineer</span> · <span style='color: #00b4d8'>Freelancer</span> · <span style='color: #ffa800'>Open Source Contributor</span> · <span style='color: #00b4d8'>Junior Engineer</span>",
                                                        ],
                                                        autoStart: true,
                                                        loop: false,
                                                        delay: 75,
                                                    }}
                                                    onInit={(typewriter) => {
                                                        typewriter
                                                            .callFunction(() => setCycle(2)) // After typing, stay on the second cycle
                                                            .start();
                                                    }}
                                                />
                                            </Box>
                                        )}
                                    </Box> */}

                                </Typography>
                            </Box>
                            <Divider sx={{
                                mt: 2, backgroundColor: "rgba(255, 255, 255, 0.2)", display: { xs: "block", sm: "none" }
                            }} />

                        </Grid>


                        <Grid item xs={12} sm={6}>
                            <Box sx={{ textAlign: { xs: "center", sm: "left" }, mb: 0 }}>
                                <Typography
                                    id="ai-career"
                                    variant="h3"
                                    sx={{
                                        fontSize: {
                                            xs: "28px",
                                            sm: "25px",
                                            md: "30px",
                                            lg: "40px",
                                        },
                                        fontWeight: 500,
                                        lineHeight: { xs: "38px", sm: "38px", md: "40px", lg: "50px" },
                                        letterSpacing: "-0.02em",
                                        [theme.breakpoints.down('425')]: {
                                            fontSize: "25px",
                                        },
                                        [theme.breakpoints.down('375')]: {
                                            fontSize: "20px",
                                            lineHeight: "30px"
                                        },
                                    }}
                                >
                                    Begin your AI Driven Tech<br />
                                    Career with InternTribe
                                    <Box sx={{ mt: 2, display: { xs: "none", sm: "block" } }}>
                                        <Button
                                            variant="contained"
                                            onClick={handleClickOpen}
                                            sx={{
                                                borderRadius: "6px",
                                                background: "linear-gradient(68deg, #2E3393 -1.82%, #1CFAFC 106.59%)",
                                                padding: "10px 15px",
                                                fontWeight: 500,
                                                color: "white",
                                                transition: "all 0.3s ease", // Smooth transition
                                                [theme.breakpoints.down(425)]: {
                                                    fontSize: "12px",
                                                },
                                                "&:hover": {
                                                    boxShadow: `
                                                        2px 2px 5px rgba(51, 210, 255, 0.6), /* Light blue */
                                                        2px 2px 10px rgba(61, 104, 222, 0.5), /* Medium blue */
                                                        2px 2px 15px rgba(152, 69, 232, 0.4)  /* Purple */
                                                    `,
                                                }

                                            }}
                                        >
                                            Enroll Now
                                        </Button>

                                        <FormSubmission open={open} handleClose={handleClose} />
                                    </Box>

                                </Typography>
                            </Box>
                        </Grid>

                        {/* Description Section */}
                        <Grid item xs={12} sm={6}>
                            <Box sx={{ display: { xs: "block", sm: "none" }, mb: 3, mt: -2 }}>
                                {[
                                    "Work on real internships with verified companies and gain valuable industry experience.",
                                    "Enhance your resume and unlock new opportunities.",
                                    "No hidden barriers—hands-on practice & enhance your ability."
                                ].map((item, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            mb: 1,
                                            gap: 1.5
                                        }}
                                    >
                                        <img
                                            src={Star}
                                            alt="Star"
                                            style={{
                                                width: 16,
                                                height: 16,
                                                marginTop: 0
                                            }}
                                        />
                                        <Typography
                                            sx={{
                                                fontSize: "13px",
                                                fontWeight: 400,
                                                lineHeight: 1.5,
                                                color: "rgba(255, 255, 255, 0.6)",
                                                width: "100%",
                                                [theme.breakpoints.down('375')]: {
                                                    fontSize: "12px",
                                                },
                                                [theme.breakpoints.down('365')]: {
                                                    fontSize: "0.7rem"
                                                },
                                            }}
                                        >
                                            {item}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>

                            <Typography
                                sx={{
                                    display: { xs: "none", sm: "block" },
                                    color: "rgba(255, 255, 255, 0.6)",
                                    fontSize: { sm: "12px", md: "13px", lg: "15px" },
                                    fontWeight: 400,
                                    lineHeight: 1.6,
                                    mb: 4,
                                    maxWidth: "90%",
                                    letterSpacing: "0.32px"
                                }}
                            >
                                Work on real internships with verified companies and gain valuable industry experience.
                                No hidden barriers—hands-on practice & enhance your ability. Enhance your resume and unlock
                                new opportunities.
                            </Typography>

                            <Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                                <CertificatePaper>

                                    <StyledCup src={Cup} alt="Trophy" />

                                    <Typography sx={{
                                        fontSize: { xs: "12px", sm: "10px", md: "12px", lg: "14px" },
                                        fontWeight: 500,
                                        [theme.breakpoints.down('425')]: {
                                            fontSize: "10px",
                                        },
                                        [theme.breakpoints.down('375')]: {
                                            fontSize: "10px",
                                        },
                                        // [theme.breakpoints.down('365')]: {
                                        //     fontSize: "8.4px",
                                        // },
                                    }}>
                                        Get Internship Certificate Directly from the Company
                                    </Typography>
                                </CertificatePaper>
                            </Grid>
                        </Grid>

                        {/* Companies Section */}
                        <Grid item xs={12} sx={{ mt: { sm: 0, md: 2 } }}>
                            <Typography sx={{
                                textAlign: "center",
                                color: 'rgba(255, 255, 255, 0.60)',
                                fontSize: "14px",
                                fontWeight: 400,
                                mb: 2
                            }}>
                                Companies offering Certificate & Stipend.
                            </Typography>

                            <Grid container spacing={2} sx={{ 
                                justifyContent: "space-between", 
                                maxWidth: "100%",
                                padding: "0 !important"
                            }}>
                                {CompanyLogos.map((company, index) => (
                                    <Grid
                                        item
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                        data-aos-delay={index * 200}
                                        data-aos-anchor-placement="top-bottom"
                                        xs={6} 
                                        sm={2.4} 
                                        md={2.4} 
                                        lg={2.4}
                                        key={index}
                                        sx={{
                                            width: "100%",
                                            display: 'flex',
                                            justifyContent: "center",
                                            padding: { 
                                                xs: "8px 8px 0 0!important", 
                                                sm: "8px 0px 8px 0px!important" 
                                            }
                                        }}
                                    >
                                        <CompanyButton sx={{ 
                                            width: "100%",
                                            ...(index === 3 && {
                                                marginRight: "20px"
                                            })
                                        }}>
                                            <img
                                                src={company}
                                                alt="Company Logo"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: "contain"
                                                }}
                                            />
                                        </CompanyButton>
                                    </Grid>
                                ))}
                            </Grid>
                            <Box sx={{ mt: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Button variant="contained" onClick={handleClick} sx={{
                                    borderRadius: "6px", background: "linear-gradient(47deg, #6E6CD8 5.72%, #40A0EF 48.21%, #77E1EE 94.27%)", padding: " 10px 15px", fontWeight: '500', color: "white", [theme.breakpoints.down(425)]: {
                                        fontSize: "12px",
                                    },
                                    display: { xs: "block", sm: "none" },
                                    width: "fit-content"
                                }}>
                                    Enroll Now
                                </Button>
                            </Box>

                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </section>

    );
}

export default Career;

