import React from 'react';
import {
    Box,
    Typography,
    Button,
    styled,
    Container,
    Grid,
} from '@mui/material';
import Searching from "../assets/images/searching.png"


const EnrollButton = styled(Button)({
    border: '1px solid #FFA000',
    // background:'transparent',
    color: '#FFA000',
    borderRadius: 0,
    fontWeight: 'bold',
    borderRadius: '50px',
    fontSize: "10px",
});


const ChooseUs = () => {
    return (
        <Box sx={{ backgroundColor: "#000", color: "#fff", py: { xs: 4, sm: 8 } }}>
            <Container maxWidth="xl">
                <Grid container spacing={4} sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <img src={Searching} alt="Choose Us Image" style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography variant="h4" sx={{
                                fontWeight: 'bold',
                                marginBottom: 3
                                // fontSize: '2.5rem',
                            }}>
                                Why choose us?
                            </Typography>
                            <Typography variant="body1"
                                sx={{ color: "#B0B0B0", mb: 3, color: 'rgba(255, 255, 255, 0.40)', fontSize: '14px', fontWeight: 100 }}
                            >
                                Join Talent Tribe's beginner-friendly internship program to kickstart your career with no prior coding knowledge required. Experience personalized learning paths, live classes with industry experts, real-world projects, and dedicated career guidance. Gain hands-on experience, deploy live projects, and earn a valuable completion certificate!
                            </Typography>
                            <EnrollButton variant="outlined" >
                                ENROLL NOW
                            </EnrollButton>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};

export default ChooseUs;