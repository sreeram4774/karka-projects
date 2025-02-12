import React from 'react';
import {
    Box,
    Typography,
    Button,
    styled,
    Container,
    Grid,
    useTheme,
} from '@mui/material';
import Searching from "../assets/images/searching.png"




const ChooseUs = () => {

    const theme = useTheme();

    const EnrollButton = styled(Button)({
        border: '1px solid #FFA000',
        color: '#FFA000',
        borderRadius: '50px',
        fontWeight: '500',
        fontSize: { xs: "0.8rem", sm: ".8rem", md: "12px", lg: "12px" },
        padding: { md: "10px 22px", lg: "10px 22px" },
        whiteSpace: 'nowrap',
        '&:hover': {
            backgroundColor: '#FFA000', // Added hover effect
            color: '#000',
        },
    });

    return (
        <Box sx={{ backgroundColor: "#000", color: "#fff", py: { xs: 4, sm: 8 }, px: { xs: 0, sm: 8 } }}>
            <Container maxWidth="xl">
                <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
                    {/* Image Section */}
                    <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center" }}>
                        <Box
                            component="img"
                            src={Searching}
                            alt="Description of the image"
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                            }}
                        />
                    </Grid>

                    {/* Text Section */}
                    <Grid item xs={12} sm={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <Typography
                            variant="h4"
                            mb={3}
                            fontWeight="500"
                            gutterBottom
                            align="left"
                            sx={{
                                color: '#FFFFFF',
                                fontSize: { xs: "28px", sm: "25px", md: "30px", lg: "40px" },
                            }}>
                            Why choose us?
                        </Typography>

                        <Typography variant="body1" sx={{
                            color: 'rgba(255, 255, 255, 0.60)',  // Increased contrast
                            marginBottom: 3,
                            fontSize: { xs: "12px", sm: "12px", md: "13px", lg: "15px" },
                            fontWeight: 400,
                            maxWidth: { md: "100%", lg: "90%" },
                            letterSpacing: "0.02rem",
                            lineHeight: "22px"
                        }}>
                            Join InternTribe's beginner-friendly internship program to kickstart your career with no prior coding knowledge required. Experience personalized learning paths, live classes with industry experts, real-world projects, and dedicated career guidance. Gain hands-on experience, deploy live projects, and earn a valuable completion certificate!
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'left' }}>
                            <EnrollButton variant="outlined">ENROLL NOW</EnrollButton>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>


    );
};

export default ChooseUs;