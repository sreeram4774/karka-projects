import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import EastIcon from '@mui/icons-material/East';
import CheckBackground from '../assets/images/CheckBackground.png';
import Shadow1 from '../assets/images/shadow1.png'
import Shadow2 from '../assets/images/shadow2.png'

const Home = () => {
    // Define styles as variables for readability and reusability
    const containerStyles = {
        backgroundColor: "#110F0F",
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundImage: `url(${CheckBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: 'relative'

    };


    const beforeStyles = {
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 1, // Ensure it's above the background
        // margin: "20px",
    }
    const afterStyles = {
        position: "absolute",
        bottom: '-7px',
        left: 0,
        zIndex: 1, // Ensure it's above the background
        // margin: "20px",
    }

    const titleStyles = {
        color: "white",
        fontSize: { xs: "40px", sm: "60px" },  // Responsive font size
        whiteSpace: "pre-line",
        fontWeight: "700",
        textAlign: { xs: "center", sm: "left" },
        lineHeight: 1.3
    };

    const subtitleStyles = {
        color: "rgba(255, 255, 255, 0.60)",
        fontSize: "12px", // Adjusted for better legibility
        fontWeight: "100",
        textAlign: { xs: "center", sm: "left" },
        marginTop: '10px',
        lineHeight: "20px",
    };

    const buttonStyles = {
        fontSize: "12px", // Increased font size for better readability
        background: "#FFA800",
        borderRadius: "50px",
        color: "black",
        display: "flex",
        alignItems: "center",
        margin: { xs: "auto", sm: 0 },
        lineHeight: "14px",
        gap: "5px", // Adjust spacing between text and icon
        textTransform: "none", // Prevents auto-uppercase
    };

    return (
        <Box sx={{
            ...containerStyles, backgroundColor: "#000", color: "#fff", pt: 8, px: 8
        }}>
            <Box sx={beforeStyles}>
                <Box
                    component="img"
                    src={Shadow1}  // Use `src` instead of `image`
                    alt="Your Image"
                    sx={{
                        width: '100%',
                        height: { xs: "250px", sm: '500px' },
                    }}
                />
                {/* <img src={Shadow1} alt="Your Image" style={{ width: "100%", height: "500px", objectFit: "cover" }} /> */}
            </Box>
            <Box sx={afterStyles}>
                <Box
                    component="img"
                    src={Shadow2}  // Use `src` instead of `image`
                    alt="Your Image"
                    sx={{
                        width: '100%',
                        height: { xs: "170px", sm: '500px' },
                    }}
                />
            </Box>


            <Box py={8}>
                <Typography
                    variant="h5"
                    sx={{
                        ...titleStyles,
                    }}
                >
                    {"Real\n"}
                    <span style={{ background: "linear-gradient(218deg, #9DE8EE 25.05%, #9DE8EE 25.05%, #FA7C0B 51.71%, #9F8CED 79.45%)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                        Internships @
                    </span>
                    {"\nVerified\nCompanies"}
                </Typography>


                <Typography variant="body1" sx={subtitleStyles}>
                    Virtual Internship Platform where Interns meet Companies.
                    <Typography component="span"
                        sx={{
                            backgroundColor: "white",
                            color: "black",
                            fontWeight: "400",
                            padding: "0 5px",
                            borderRadius: "20px",
                            marginLeft: "5px",
                        }}
                    >
                        Completely Online
                    </Typography>
                </Typography>

                <Box marginTop={2}>
                    <Button variant="contained" sx={buttonStyles}>
                        APPLY NOW <EastIcon />
                    </Button>
                </Box>
            </Box>
        </Box >
    );
};

export default Home;
