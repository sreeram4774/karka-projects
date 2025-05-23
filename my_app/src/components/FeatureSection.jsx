import { Box, Card, Container, Grid, Paper, Typography, styled, useTheme } from '@mui/material';
import React from 'react';
import FeatureImage1 from '../assets/featureimages/1.svg';
import FeatureImage2 from '../assets/featureimages/2.svg';
import FeatureImage3 from '../assets/featureimages/3.svg';
import FeatureImage4 from '../assets/featureimages/4.svg';
import FeatureImage5 from '../assets/featureimages/5.svg';
import FeatureImage6 from '../assets/featureimages/6.svg';
import FeatureImage7 from '../assets/featureimages/7.svg';

const FeatureSection = () => {

    const theme = useTheme();

    const CardPaper = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(2),
        backgroundColor: 'transparent',
        color: '#FFFFFF',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        border: '1px solid #A1AEBF'
    }));

    const cardData = [
        {
            img: FeatureImage1,
            title: 'Certificate',
            description: [
                "Earn a certificate upon successful completion.",
                "Validate your experience with a recognized credential."
            ]
        },
        {
            img: FeatureImage2,
            title: 'Real Customer Projects',
            description: [
                "Work on exciting projects for real-world clients.",
                "Build a portfolio that stands out from the crowd."
            ]
        },
        {
            img: FeatureImage3,
            title: 'Stipend',
            description: [
                "Unlock stipends after completing job simulations.",
                " Get rewarded for your contributions on real-world projects."
            ]
        },
        {
            img: FeatureImage7,
            title: 'Job Simulation',
            description: [
                "Gain hands-on experience with practical simulations.",
                "Tackle diverse projects to enhance your skills."
            ]
        },
        {
            img: FeatureImage4,
            title: 'AI Code Generation',
            description: [
                "Effortlessly generate ready-to-use code with the power of AI.",
                "Transform ideas into reality faster with intelligent, automated coding solutions."
            ]
        },
        {
            img: FeatureImage5,
            title: 'Task & Code Review',
            description: [
                "Receive constructive feedback on your code.",
                "Work with experienced mentors to refine your code."
            ]
        },

    ];

    return (
        <Box sx={{ backgroundColor: "#110F0F", color: "#fff", py: { xs: 4, sm: 8 }, px: { xs: 0, sm: 4 } }}>
            <Container maxWidth="lg">
                <Typography
                    variant="body1"
                    fontSize="10px"
                    fontWeight="400"
                    gutterBottom
                    align="center"
                    sx={{ color: '#FFFFFF' }}
                >
                    Get Ability to Work. Get Job
                </Typography>
                <Typography
                    variant="h4"
                    mb={3}
                    fontWeight="500"
                    gutterBottom
                    align="center"
                    sx={{
                        color: '#FFFFFF',
                        fontSize: { xs: "28px", sm: "25px", md: "30px", lg: "40px" },
                    }}>
                    What you get?
                </Typography>


                <Grid container spacing={4}>
                    {cardData.map((card, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <CardPaper elevation={3}>
                                <Typography variant="h3">
                                    <img src={card.img} alt={card.title} />
                                </Typography>
                                <Typography variant="h6" fontWeight="400" gutterBottom sx={{
                                    [theme.breakpoints.down('425')]: {
                                        fontSize: "1.2rem"
                                    },
                                }}>
                                    {card.title}
                                </Typography>
                                <ul style={{ textAlign: "left", paddingLeft: 20 }}>
                                    {card.description.map((point, i) => (
                                        <li key={i} style={{ marginBottom: 1, fontWeight: 400, fontSize: "9px", color: 'rgba(255, 255, 255, 0.60)' }}>
                                            <Typography variant="body2"
                                                sx={{
                                                    [theme.breakpoints.down('375')]: {
                                                        fontSize: "0.7rem"
                                                    },
                                                }}
                                            >{point}</Typography>
                                        </li>
                                    ))}
                                </ul>
                            </CardPaper>
                        </Grid>
                    ))}
                </Grid>
                <Typography
                    variant="h4"
                    align="center"
                    sx={(theme) => ({
                        mt: 4,
                        color: '#FFFFFF',
                        typography: {
                            xs: 'h5',
                            sm: 'h4',
                        },
                        fontSize: {
                            xs: "20px",
                            sm: "25px",
                        },
                        [theme.breakpoints.down(425)]: {
                            fontSize: "18px",
                        },
                    })}
                >
                    {/* After internship <span style={{ color: "#ffa800" }}>FREE</span> placement training & assistance */}
                    Get placement assistance from <span style={{ color: "#ffa800" }}>Dedicated Placement Officer</span>
                </Typography>
            </Container>
        </Box>
    );
};

export default FeatureSection;
