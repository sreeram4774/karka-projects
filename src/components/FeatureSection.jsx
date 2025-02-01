import { Box, Card, Container, Grid, Paper, Typography, styled } from '@mui/material'
import React from 'react'
import FeatureImage1 from '../assets/featureimages/1.svg'; // Example
import FeatureImage2 from '../assets/featureimages/2.svg'; // Example
import FeatureImage3 from '../assets/featureimages/3.svg'; // Example
import FeatureImage4 from '../assets/featureimages/4.svg'; // Example
import FeatureImage5 from '../assets/featureimages/5.svg'; // Example
import FeatureImage6 from '../assets/featureimages/6.svg'; // Example


const CardPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2), // Adjust padding as needed
    backgroundColor: 'transparent', // Dark background color
    color: '#FFFFFF', // Light text color
    height: '100%', // Ensure cards take up equal height in grid
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    // justifyContent: 'center',
    border: '1px solid #A1AEBF'

}));

const FeatureSection = () => {

    const cardData = [
        {
            img: FeatureImage1, // Replace with actual img component
            title: 'Assignments',
            description: [
                "100+ tasks to build hands-on skills.",
                "Designed for real-world problem-solving.",
            ],
        },
        {
            img: FeatureImage2, // Replace with actual img component
            title: 'Job Simulation',
            description: [
                "Gain hands-on experience with practical simulations.",
                "Tackle diverse projects to enhance your skills.",
            ],
        },
        {
            img: FeatureImage3, // Replace with actual img component
            title: 'Completion Verification',
            description: [
                "Earn a verified internship certificate.",
                "Showcase achievements to employers.",
            ],
        },
        {
            img: FeatureImage4, // Replace with actual img component
            title: 'AI Code Generation',
            description: [
                "Effortlessly generate ready-to-use code with AI.",
                "Transform ideas into reality faster.",
            ],
        },
        {
            img: FeatureImage5, // Replace with actual img component
            title: 'Recorded Sessions',
            description: [
                "Access 200+ hours of learning content.",
                "Revisit sessions anytime for better understanding.",
            ],
        },
        {
            img: FeatureImage6, // Replace with actual img component
            title: 'Live Support',
            description: [
                "Real-time help from industry mentors.",
                "Guidance throughout your internship journey.",
            ],
        },
    ];

    return (
        <Box sx={{ backgroundColor: "#110F0F", color: "#fff", py: { xs: 4, sm: 8 }, px: { xs: 0, sm: 8 } }}>
            <Container maxWidth="lg">
                <Typography variant="body1" fontSize={"10px"} fontWeight="100" gutterBottom align="center" sx={{ color: '#FFFFFF' }}>
                    Get Real Work Experience. Get Job
                </Typography>
                <Typography variant="h4" mb={4} fontWeight="bold" gutterBottom align="center" sx={{ color: '#FFFFFF', typography: { xs: "h5", sm: "h4" } }}>
                    What do you get?

                </Typography>
                <Grid container spacing={4}>
                    {cardData.map((card, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <CardPaper elevation={3}>
                                <Typography variant="h3"> {/* Larger heading for img */}
                                    <img src={card.img} alt="" />
                                </Typography>
                                <Typography variant="h6" fontWeight="bold" gutterBottom>
                                    {card.title}
                                </Typography>
                                <ul style={{ textAlign: "left", paddingLeft: 20 }}>
                                    {card.description.map((point, i) => (
                                        <li key={i} style={{ marginBottom: 1, fontSize: "10px", color: 'rgba(255, 255, 255, 0.60)' }}>
                                            <Typography variant="body2">{point}</Typography>
                                        </li>
                                    ))}
                                </ul>
                            </CardPaper>
                        </Grid>
                    ))}
                </Grid>
                <Typography variant="h6" align="center" sx={{ mt: 4, color: '#FFFFFF' }}> {/* Light text color */}
                    After internship <span style={{ color: "#ffa800" }}>FREE</span> placement training & assistance
                </Typography>
            </Container>

        </Box>
    )
}

export default FeatureSection
