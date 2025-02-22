import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import {
    Grid,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    styled,
} from '@mui/material';
import Group from '../assets/images/Group.svg';
import CheckBg from '../assets/images/CheckBackground.png';
import { Fab, Zoom, useMediaQuery, useTheme } from "@mui/material";
import { useScrollTrigger } from "@mui/material";
import Shadow3 from '../assets/images/shadow3.png'
import WhatsappLogo from '../assets/courseimages/whatsapplogo.png'
import { Translate } from '@mui/icons-material';


const Courses = () => {

    const CourseContainer = styled(Container)(({ theme }) => ({
        backgroundColor: "#FFB219",
        padding: "32px",
        backgroundImage: `url(${CheckBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "4px",
        border: "1px solid #A1AEBF",
        position: "relative",
        overflow: 'hidden',
        [theme.breakpoints.down("sm")]: {
            padding: "25px",
        },
    }));

    const overlayStyles = {
        '&::before': {
            content: '""',
            position: 'absolute',
            top: { xs: -50, sm: 0, md: 0 },
            left: { xs: 0, sm: -150, md: 0 },

            width: '100%',
            height: '100%',
            background: `url(${Shadow3}) no-repeat`,
            pointerEvents: 'none',
            zIndex: 1,
        },

    };

    const services = [
        "Frontend UI Development",
        "Backend API Development",
        "Mobile App Development",
        "UI/UX Design",
        "Digital Marketing",
        "AI & Data Analysis",
        "E-commerce and WordPress Solutions",
        "Graphic Design"
    ];


    const theme = useTheme();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleClick = () => {
        const phoneNumber = "919385647154";
        const message = encodeURIComponent("Hello! I'm interested in enrolling for the InternTribe's internship program.");
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, "_blank");
    };

    return (
        <Box sx={{ backgroundColor: "#110f0f", py: { xs: 4, sm: 8 }, px: { xs: 2, sm: 4, md: 8 }, }}>
            <Container maxWidth="xl">

                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    <Box display="flex" justifyContent='end'>
                        <Zoom in={trigger}>
                            <Zoom in={trigger}>
                                <Fab
                                    onClick={handleScrollTop}
                                    sx={{
                                        borderRadius: "50px",
                                        width: "auto",
                                        height: "auto",
                                        padding: "0 20px",
                                        backgroundColor: "transparent",
                                        border: "1px solid #FFA800",
                                        color: "#FFA800",
                                        transition: "all 0.3s ease", // Smooth transition effect

                                        "&:hover": {
                                            backgroundColor: "#FFA800",
                                            color: "#000",
                                            borderColor: "#FFA800",
                                            boxShadow:"2px 2px 3px #FFA800"

                                        },

                                        zIndex: 10, // Ensures it stays above other elements
                                    }}
                                >
                                    Go To Top
                                </Fab>
                            </Zoom>

                        </Zoom>
                    </Box>
                </Box>

                <CourseContainer maxWidth="xl" sx={{ marginTop: 4, ...overlayStyles }}>
                    <Typography
                        variant="h4"
                        fontWeight="500"
                        gutterBottom
                        align="center"
                        sx={{
                            fontSize: { xs: "23px", sm: "25px", md: "30px", lg: "40px" },
                            [theme.breakpoints.down('425')]: {
                                fontSize: "25px",
                            },
                            [theme.breakpoints.down('375')]: {
                                fontSize: "20px",
                                lineHeight: "30px"
                            },
                        }}>
                        Become Job Ready with AI
                    </Typography>

                    <Typography
                        variant="h4"
                        mb={2}
                        fontWeight="500"
                        gutterBottom
                        alignItems={{ xs: "center", sm: "left" }}
                        sx={{
                            color: '#FFFFFF',
                            fontSize: { xs: "28px", sm: "25px", md: "30px", lg: "40px" }, [theme.breakpoints.down('425')]: {
                                fontSize: "25px",
                            },
                            [theme.breakpoints.down('375')]: {
                                fontSize: "20px",
                                lineHeight: "30px"
                            },
                        }}>

                    </Typography>

                    <Typography variant="body1" align="center" fontSize="12px" sx={{ typography: { xs: "body2", sm: "body1" } }}>
                        Learn to use tools used in industry
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 4 }}>
                        <Grid container maxWidth="lg" spacing={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Grid item xs={12} md={7} lg={8} sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: { xs: "column", sm: "row" } }}>
                                {/* <Box sx={{ width: "180px", height: "180px", mx: 'auto', mb: isSmallScreen ? 2 : 0 }}>
                                    <img src={Group} alt="group" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                </Box> */}
                                <Grid item sm={5} md={4} >
                                    <Box
                                        component="img"
                                        src={Group}
                                        alt="group"
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            // display: 'block',

                                        }}
                                    />
                                </Grid>
                                <Grid item sm={7} md={8}>
                                    <Box ml={{ xs: 0, sm: 2 }} mt={{ xs: 2, sm: 0 }}  >
                                        {services.map((service, index) => (
                                            <Typography
                                                key={index}
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "flex-start",
                                                    gap: "8px",
                                                    fontSize: { xs: "12px", sm: "12px", md: "13px", lg: "15px" },
                                                    fontWeight: "500",
                                                    lineHeight: '1.7',
                                                    color: "#0D0E14",
                                                    margin: 0,
                                                    [theme.breakpoints.down(425)]: {
                                                        fontSize: "11px",
                                                    },
                                                }}
                                            >
                                                <span style={{ minWidth: "20px", textAlign: "right" }}>{index + 1}.</span>
                                                <span>{service}</span>
                                            </Typography>
                                        ))}

                                    </Box>
                                </Grid>


                            </Grid>

                            <Grid item xs={12} md={5} lg={4} >
                                <Box sx={{ display: "flex", flexDirection: "column" }}>
                                    {/* <TextField
                                        fullWidth
                                        placeholder="Your Name"
                                        sx={{
                                            input: {
                                                color: "#000",
                                                padding: { xs: "10px", sm: "13px", md: "10px", lg: "13px" },
                                                "&::placeholder": {
                                                    color: "#0D0E14", // Change placeholder color
                                                    fontWeight: 400,
                                                    fontSize: "14px",
                                                    opacity: 1, // Ensures visibility in some browsers
                                                    [theme.breakpoints.down(425)]: {
                                                        fontSize: "12px", // Apply when screen is xs (below sm)
                                                    },
                                                }
                                            },
                                            marginBottom: { xs: 1, md: 1, lg: 2 },
                                            "& .MuiOutlinedInput-root": {
                                                border: "2px solid #A1AEBF",
                                                backgroundColor: "white",
                                                borderRadius: "30px",
                                            },
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                border: "none",
                                            },

                                        }}
                                    />
                                    <TextField
                                        fullWidth
                                        placeholder="Your Mobile Number"
                                        sx={{
                                            input: {
                                                color: "#000",
                                                padding: { xs: "10px", sm: "13px", md: "10px", lg: "13px" },
                                                "&::placeholder": {
                                                    color: "#0D0E14", // Change placeholder color
                                                    fontWeight: 400,
                                                    fontSize: "14px",
                                                    opacity: 1, // Ensures visibility in some browsers
                                                    [theme.breakpoints.down(425)]: {
                                                        fontSize: "12px", // Apply when screen is xs (below sm)
                                                    },
                                                }
                                            },
                                            marginBottom: { xs: 1, md: 1, lg: 2 },
                                            "& .MuiOutlinedInput-root": {
                                                border: "2px solid #A1AEBF",
                                                backgroundColor: "white",
                                                borderRadius: "30px",
                                            },
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                border: "none",
                                            },
                                        }}
                                    />
                                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label={
                                                <Typography
                                                    sx={{
                                                        fontSize: { xs: "13px", sm: "14px" },
                                                        [theme.breakpoints.down(425)]: {
                                                            fontSize: "10px", // Apply when screen is xs (below sm)
                                                        },
                                                    }}>
                                                    I agree to <span style={{ textDecoration: "underline" }}>Terms & Conditions</span>
                                                </Typography>}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label={
                                                <Typography
                                                    sx={{
                                                        fontSize: { xs: "13px", sm: "14px" }, [theme.breakpoints.down(425)]: {
                                                            fontSize: "10px", // Apply when screen is xs (below sm)
                                                        },
                                                    }}>
                                                    Send Whatsapp updates
                                                </Typography>}
                                            sx={{ marginBottom: { xs: 1, lg: 2 }, marginTop: { xs: '-8px', lg: 0 } }}
                                        />
                                    </Box> */}
                                    {/* <a
                                        href="https://wa.me/8903003201?text=Hello!%20I'm%20interested%20in%20enrolling%20for%20the%20internship%20program."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none' }}
                                    > */}
                                    <Box mb={2} onClick={handleClick} sx={{ position: "relative", cursor: "pointer" }}>
                                        <img src={WhatsappLogo} alt="WhatsApp" style={{ width: "100%", height: "100%" }} />
                                        <Typography
                                            sx={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-30%, -60%)',
                                                fontSize: '20px',
                                                fontWeight: 700,
                                                color: 'black',
                                                transition: 'all 0.3s ease',
                                                [theme.breakpoints.down('375')]: {
                                                    fontSize: "18px",
                                                },
                                                [theme.breakpoints.down('321')]: {
                                                    fontSize: "15px",
                                                }
                                            }}
                                        >
                                            ENROLL NOW
                                        </Typography>
                                    </Box>
                                    {/* </a> */}


                                    {/* <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                                 
                                        <Button
                                            variant="contained"
                                            sx={{
                                                borderRadius: "12px",
                                                backgroundColor: "black",
                                                // border: "1px solid transparet",
                                                color: "white",
                                                padding: "10px 22px",
                                                fontWeight: 500,
                                                fontSize: "14px", // Default font size
                                                transition: "all 0.3s ease", // Smooth hover effect

                                                "&:hover": {
                                                    // backgroundColor: "#FFA800",
                                                    color: "#FFA800",
                                                    // border: "1px solid #FFA800"
                                                    boxShadow :"2px 2px 3px black"
                                                },

                                                // Responsive styles for smaller screens
                                                "@media (max-width: 425px)": {
                                                    fontSize: "12px",
                                                },
                                            }}
                                        >
                                            DOWNLOAD BROCHURE
                                        </Button>

                                    </Box> */}

                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </CourseContainer>

                <Box sx={{ display: { xs: "block", sm: "none" }, marginTop: 2 }}>
                    <Box display="flex" justifyContent='end'>
                        <Zoom in={trigger}>
                            <Fab
                                onClick={handleScrollTop}
                                sx={{
                                    borderRadius: "50px",
                                    width: "auto",
                                    height: "auto",
                                    padding: "0 20px",
                                    backgroundColor: "transparent",
                                    border: "1px solid #FFA800",
                                    color: "#FFA800",
                                    transition: "all 0.3s ease", // Smooth transition effect

                                    "&:hover": {
                                        backgroundColor: "#FFA800",
                                        color: "#000",
                                        borderColor: "#FFA800",
                                        boxShadow:"2px 2px 3px #FFA800"
                                    },

                                    zIndex: 10, // Ensures it stays above other elements
                                }}
                            >
                                Go To Top
                            </Fab>
                        </Zoom>

                    </Box>
                </Box>

            </Container>
        </Box >
    );
}

export default Courses;