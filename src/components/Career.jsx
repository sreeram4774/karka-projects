import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from "typewriter-effect";


import Cup from '../assets/images/Cup.png';
import Star from '../assets/images/star.svg';
import image1 from '../assets/logos/image1.png';
import image2 from '../assets/logos/image2.png';
import image3 from '../assets/logos/image3.png';
import image4 from '../assets/logos/image4.png';
import image5 from '../assets/logos/image5.png';


const Career = () => {
    const theme = useTheme();

    React.useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: false,  // Allow repeated animations
            mirror: true, // Replay animation on scroll-up
            anchorPlacement: "top-bottom",
        });

        const handleScroll = () => {
            AOS.refresh(); // Refresh AOS on scroll to track visibility changes
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
            padding: "8px 16px"
        }
    }));

    const CompanyLogos = [image1, image2, image3, image4, image5];

    return (
        <section id="verified-companies">
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
                                mb: 3
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
                                            ],
                                            autoStart: true,
                                            loop: true,
                                            delay: 75,
                                        }}
                                    />
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{ textAlign: { xs: "center", sm: "left" }, mb: 0 }}>
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
                                    Career with{" "}
                                    <Typography component="span"
                                        variant="inherit"
                                        sx={{
                                            color: "#fff",
                                            fontWeight: "inherit",
                                            fontSize: "inherit"
                                        }}>
                                        InternTribe
                                    </Typography>
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Description Section */}
                        <Grid item xs={12} sm={6}>
                            <Box sx={{ display: { xs: "block", sm: "none" }, mb: 3 }}>
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

                            <Grid container spacing={2} sx={{ justifyContent: "center", maxWidth: "100%", mx: "auto" }}>
                                {CompanyLogos.map((company, index) => (
                                    <Grid
                                        item
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                        data-aos-delay={index * 200}
                                        data-aos-anchor-placement="top-bottom"

                                        xs={6} sm={2.4} md={2.4} lg={2.4}
                                        key={index}
                                        sx={{
                                            width: "100%",
                                            display: 'flex',
                                            justifyContent: 'center',
                                            padding: { xs: "16px 16px 0 0!important", sm: "8px 0px 8px 0px!important" }
                                            // padding: { xs: "16px 16px 0 0!important", sm: "16px 8px 16px 8px!important" }

                                        }}
                                    >
                                        <CompanyButton>
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
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </section>

    );
}

export default Career;

// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// import Cup from '../assets/images/Cup.png';
// import Star from '../assets/images/star.svg';
// import image1 from '../assets/logos/image1.png';
// import image2 from '../assets/logos/image2.png';
// import image3 from '../assets/logos/image3.png';
// import image4 from '../assets/logos/image4.png';
// import image5 from '../assets/logos/image5.png';

// const Career = () => {
//     const theme = useTheme();
//     const careerRef = React.useRef(null);

//     React.useEffect(() => {
//         // Initialize AOS
//         AOS.init({
//             duration: 1000,
//             easing: "ease-in-out",
//             once: false,
//             mirror: true,
//             offset: 50,
//             disable: false,
//             disableMutationObserver: false,
//             startEvent: 'DOMContentLoaded'
//         });

//         // Function to refresh AOS on scroll
//         const refreshAOS = () => {
//             AOS.refresh();
//         };

//         // Add scroll event listener
//         window.addEventListener('scroll', refreshAOS);

//         // Clean up
//         return () => {
//             window.removeEventListener('scroll', refreshAOS);
//         };
//     }, []);

//     // Re-trigger AOS when component updates
//     React.useEffect(() => {
//         AOS.refresh();
//     });

//     const CertificatePaper = styled(Paper)(({ theme }) => ({
//         padding: "0px 16px",
//         display: "inline-flex",
//         alignItems: "center",
//         backgroundColor: "#ffa800",
//         color: "#000",
//         borderRadius: "3px",
//         boxShadow: "none",
//         gap: "8px",
//         width: "fit-content",
//         [theme.breakpoints.down('md')]: {
//             width: '100%',
//             justifyContent: 'center',
//         }
//     }));

//     const StyledCup = styled('img')(({ theme }) => ({
//         width: '32px',
//         height: '32px',
//         objectFit: 'contain',
//         marginTop: '-20px',
//         [theme.breakpoints.down('md')]: {
//             width: '30px',
//             height: '30px',
//         },
//     }));

//     const CompanyButton = styled(Button)(({ theme }) => ({
//         backgroundColor: "transparent",
//         color: "#fff",
//         textTransform: "capitalize",
//         width: "100%",
//         maxWidth: "fit-content",
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: "10px",
//         gap: '8px',
//         '&:hover': {
//             backgroundColor: "rgba(255, 255, 255, 0.05)",
//             borderColor: "#fff"
//         },
//         [theme.breakpoints.down('sm')]: {
//             maxWidth: "160px",
//             fontSize: "14px",
//             padding: "8px 16px"
//         }
//     }));

//     const CompanyLogos = [image1, image2, image3, image4, image5];

//     return (
//         <Box ref={careerRef}
//             sx={{
//                 backgroundColor: "#000",
//                 color: "#fff",
//                 py: { xs: 4, sm: 8 },
//                 px: { xs: 2, sm: 4 }
//             }}>
//             <Container maxWidth="xl">
//                 <Grid container spacing={4}>
//                     {/* Title Section */}
//                     <Grid
//                         item
//                         xs={12}
//                         sm={6}
//                         data-aos="fade-up"
//                         data-aos-anchor-placement="center-bottom"
//                     >
//                         <Box sx={{ textAlign: { xs: "center", sm: "left" }, mb: 0 }}>
//                             <Typography
//                                 variant="h3"
//                                 sx={{
//                                     fontSize: { xs: "28px", sm: "30px", md: "40px" },
//                                     fontWeight: 500,
//                                     lineHeight: { xs: "38px", md: "56px" },
//                                     letterSpacing: "-0.02em"
//                                 }}
//                             >
//                                 Begin your AI Driven Tech<br />
//                                 Career with{" "}
//                                 <Typography component="span" variant="inherit" sx={{ color: "#ffa800" }}>
//                                     InternTribe
//                                 </Typography>
//                             </Typography>
//                         </Box>
//                     </Grid>

//                     {/* Description Section */}
//                     <Grid
//                         item
//                         xs={12}
//                         sm={6}
//                         data-aos="fade-up"
//                         data-aos-anchor-placement="center-bottom"
//                         data-aos-delay="100"
//                     >
//                         <Typography sx={{
//                             color: "rgba(255, 255, 255, 0.6)",
//                             fontSize: { sm: "12px", md: "13px", lg: "15px" },
//                             fontWeight: 400,
//                             lineHeight: 1.6,
//                             mb: 4,
//                             maxWidth: "90%"
//                         }}>
//                             Work on real internships with verified companies and gain valuable industry experience.
//                             No hidden barriers—hands-on practice & enhance your ability. Enhance your resume and unlock
//                             new opportunities.
//                         </Typography>

//                         <Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
//                             <CertificatePaper>
//                                 <StyledCup src={Cup} alt="Trophy" />
//                                 <Typography sx={{ fontSize: { xs: "12px", sm: "14px" }, fontWeight: 500 }}>
//                                     Get Internship Certificate Directly from the Company
//                                 </Typography>
//                             </CertificatePaper>
//                         </Grid>
//                     </Grid>

//                     {/* Companies Section */}
//                     <Grid
//                         item
//                         xs={12}
//                         data-aos="fade-up"
//                         data-aos-anchor-placement="center-bottom"
//                         data-aos-delay="200"
//                         sx={{ mt: { sm: 0, md: 2 } }}
//                     >
//                         <Typography sx={{
//                             textAlign: "center",
//                             color: 'rgba(255, 255, 255, 0.60)',
//                             fontSize: "14px",
//                             fontWeight: 400,
//                             mb: 2
//                         }}>
//                             Companies offering Certificate & Stipend.
//                         </Typography>

//                         <Grid container spacing={2} sx={{ justifyContent: "center", maxWidth: "100%", mx: "auto" }}>
//                             {CompanyLogos.map((company, index) => (
//                                 <Grid
//                                     item
//                                     data-aos="fade-up"
//                                     data-aos-anchor-placement="center-bottom"
//                                     data-aos-delay={300 + (index * 100)}
//                                     xs={6} sm={2.4} md={2.4} lg={2.4}
//                                     key={index}
//                                     sx={{
//                                         width: "100%",
//                                         display: 'flex',
//                                         justifyContent: 'center',
//                                         padding: { xs: "16px 16px 0 0!important", sm: "8px 0px 8px 0px!important" }
//                                     }}
//                                 >
//                                     <CompanyButton>
//                                         <img
//                                             src={company}
//                                             alt="Company Logo"
//                                             style={{
//                                                 width: '100%',
//                                                 height: '100%',
//                                                 objectFit: "contain"
//                                             }}
//                                         />
//                                     </CompanyButton>
//                                 </Grid>
//                             ))}
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </Box>
//     );
// }

// export default Career;


