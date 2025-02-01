import { Box, Button, Chip, Container, Grid, Paper, Typography, styled } from '@mui/material'
import React, { useRef } from 'react'
import EastIcon from '@mui/icons-material/East';
import VerifiedIcon from '@mui/icons-material/Verified';
import CloseIcon from '@mui/icons-material/Close';
import Slider from 'react-slick';  // Import the slick carousel
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "slick-carousel/slick/slick.css";  // Import the default slick CSS
import "slick-carousel/slick/slick-theme.css";

// Styling for the Pricing Card
const PricingCardContainer = styled(Paper)(({ theme, bgColor }) => ({
    textAlign: 'left',
    backgroundColor: bgColor || '#162B60', // Use default if bgColor is not provided
    color: '#FFFFFF',
    borderRadius: '20px',
    height: '100%',
    border: '1px solid #A1AEBF',
    padding: '20px',
}));

const Pricing = () => {

    const pricingData = [
        {
            title: 'Self Paced',
            subtitle: 'First 25 Interns only',
            originalPrice: '₹10000',
            discountedPrice: '₹2,000',
            description: 'Ideal for those who can learn things on their own and selfpaced',
            features: [
                { checked: true, text: 'Online Mode' },
                { checked: true, text: '120 to 360 hours' },
                { checked: true, text: 'Internship Certificate' },
                { checked: true, text: 'Stipend upto 15,000' },
                { checked: true, text: 'Work on real customer projects' },
            ],
            internships: [
                { checked: true, text: '100+ Practice assignments' },
                { checked: true, text: '20+ Job simulations' },
                { checked: true, text: 'AI Codegen' },
                { checked: false, text: 'No project guidance' },
                { checked: true, text: '100 hours live/recorded lectures' },
                { checked: false, text: 'No live support & doubt clearance' },
            ],
            certifications: [
                { checked: true, text: 'Internship certificate from real verified software companies' },
                { checked: true, text: 'Verified completion certificate' },
                { checked: false, text: 'No code review' },
            ],
            placements: [
                { checked: true, text: 'Resume preparation by experts' },
                { checked: true, text: 'Portfolio on Linkedin and Github' },
                { checked: true, text: 'Placement assistance' },
                { checked: false, text: 'No mock interview' },
                { checked: true, text: 'Softskill training' },
                { checked: true, text: 'Business english training' },

            ]
        },
        {
            title: 'With Developer Support',
            subtitle: 'First 25 Only',
            originalPrice: '₹20000',
            discountedPrice: '₹12,000',
            description: 'Ideal for those who needs to gain live skills from a Senior developer',
            features: [
                { checked: true, text: 'Online Mode' },
                { checked: true, text: '120 to 360 hours' },
                { checked: true, text: 'Internship Certificate' },
                { checked: true, text: 'Stipend upto 15,000' },
                { checked: true, text: 'Work on real customer projects' },
            ],
            internships: [
                { checked: true, text: '100+ Practice assignments' },
                { checked: true, text: '20+ Job simulations' },
                { checked: true, text: 'AI Codegen' },
                { checked: true, text: 'Project guidance' },
                { checked: true, text: '100 hours live/recorded lectures' },
                { checked: true, text: 'Live support & doubt clearance' },
            ],
            certifications: [
                { checked: true, text: 'Internship certificate from real verified software companies' },
                { checked: true, text: 'Verified completion certificate' },
                { checked: true, text: 'Code review' },
            ],
            placements: [
                { checked: true, text: 'Resume preparation by experts' },
                { checked: true, text: 'Portfolio on Linkedin and Github' },
                { checked: true, text: 'Placement assistance' },
                { checked: true, text: 'Mock interview' },
                { checked: true, text: 'Softskill training' },
                { checked: true, text: 'Business english training' },
            ]
        },
    ];

    const sliderRef = useRef(null);

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const handleBack = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const settings = {
        dots: false,  // Enable dots navigation
        infinite: true,  // Infinite scroll
        speed: 500,  // Transition speed
        slidesToShow: 2,  // Show one slide at a time
        slidesToScroll: 1,  // Scroll one slide at a time
        nextArrow: <></>,  // or:  nextArrow: false,
        prevArrow: <></>,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
    };

    return (
        <Box sx={{ backgroundColor: "#110f0f", color: "#fff", py: { xs: 4, sm: 8 }, px: { xs: 0, sm: 8 } }}>
            <Container maxWidth="md" align="center">
                <Box>
                    <Container maxWidth="sm" >
                        <Typography variant="h4" gutterBottom sx={{
                            fontWeight: 'bold',
                            marginBottom: 3,
                        }}>
                            Some pieces of our solutions
                        </Typography>
                        <Typography variant='body1' sx={{ color: 'rgba(255, 255, 255, 0.40)', fontSize: '13px' }}>
                            We have solved your problem of finding and internship and excelling in your career into these two buckets below
                        </Typography>
                    </Container>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', marginBottom: '14px', marginTop: 4 }}> {/* Center the arrows */}
                    <Box sx={{ display: 'flex' }}>
                        <IconButton onClick={handleBack} sx={{ border: "1px solid #ffa800", mr: 2, borderRadius: '0', color: "#ffa800" }}> {/* Set color here */}
                            <ArrowBackIosNewIcon />
                        </IconButton>

                        <IconButton onClick={handleNext} sx={{ border: "1px solid #ffa800", borderRadius: '0', color: "#ffa800" }}> {/* Set color here */}
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </Box>
                </Box>

                <Slider ref={sliderRef} {...settings}>  {/* Wrap the Grid inside Slider */}
                    {pricingData.map((card, index) => (
                        <Grid item key={index} xs={6} md={4} lg={3} sx={{ padding: "10px", width: "80%" }}>
                            {/* <PricingCardContainer elevation={3} bgColor={index === 0 ? '#110f0f' : '#162B60'}> */}
                            <PricingCardContainer elevation={3} sx={{ backgroundColor: index === 0 ? '#110f0f' : '#162B60' }}>

                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 1 }}>
                                    <Chip label={card.title} size="small" sx={{
                                        background: 'rgba(255, 255, 255, 0.15)', color: "white", fontSize: "11px"
                                    }} />
                                    <Chip label={card.subtitle} size="small" sx={{
                                        background: '#FFEAEA',
                                        color: "#CA3E41", fontSize: "11px"
                                    }} />
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                    <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.32)', mr: 1, textDecoration: 'line-through' }}>
                                        {card.originalPrice}
                                    </Typography>
                                    <Typography variant="h4" fontWeight="bold" sx={{ color: '#FFFFFF' }}>
                                        {card.discountedPrice}
                                    </Typography>
                                </Box>

                                <Typography variant="body2" sx={{ color: '#EEEEEE', mb: 3 }}>
                                    {card.description}
                                </Typography>

                                <Button variant="contained" sx={{ textTransform: 'none', backgroundColor: "#ffa800", color: 'black', borderRadius: "10px", fontSize: "13px" }}>
                                    Secure Your February Spot <EastIcon />
                                </Button>

                                {/* Render features, internships, certifications, placements */}
                                <Box padding='15px 0px'>
                                    {card.features.map((feature, index) => (
                                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 1 }}>
                                            <Typography variant='body2' sx={{ fontSize: "13px", fontWeight: "100" }} >
                                                {feature.checked ? <VerifiedIcon sx={{ fontSize: "18px", color: "#3ED37A" }} /> : <CloseIcon sx={{ color: 'red', fontSize: "18px" }} />}
                                            </Typography>
                                            <Typography variant='body2' sx={{ fontSize: "14px", fontWeight: "100" }} >
                                                {feature.text}
                                            </Typography>
                                        </Box>
                                    ))}
                                    <Typography variant='h6' margin='15px 0px' sx={{ color: "#FFA800" }}>Internship</Typography>
                                    {card.internships.map((internship, index) => (
                                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 1 }}>
                                            <Typography variant='body2' sx={{ fontSize: "13px", fontWeight: "100" }} >
                                                {internship.checked ? <VerifiedIcon sx={{ fontSize: "18px", color: "#3ED37A" }} /> : <CloseIcon sx={{ color: 'red', fontSize: "18px" }} />}
                                            </Typography>
                                            <Typography variant='body2' sx={{ fontSize: "14px", fontWeight: "100" }} >
                                                {internship.text}
                                            </Typography>
                                        </Box>
                                    ))}
                                    <Typography variant='h6' margin='15px 0px' sx={{ color: "#FFA800" }}>Certification</Typography>
                                    {card.certifications.map((certification, index) => (
                                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 1 }}>
                                            <Typography variant='body2' sx={{ fontSize: "13px", fontWeight: "100" }} >
                                                {certification.checked ? <VerifiedIcon sx={{ fontSize: "18px", color: "#3ED37A" }} /> : <CloseIcon sx={{ color: 'red', fontSize: "18px" }} />}
                                            </Typography>
                                            <Typography variant='body2' sx={{ fontSize: "14px", fontWeight: "100" }} >
                                                {certification.text}
                                            </Typography>
                                        </Box>
                                    ))}
                                    <Typography variant='h6' margin='15px 0px' sx={{ color: "#FFA800" }}>Placement</Typography>
                                    {card.placements.map((placement, index) => (
                                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 1 }}>
                                            <Typography variant='body2' sx={{ fontSize: "13px", fontWeight: "100" }} >
                                                {placement.checked ? <VerifiedIcon sx={{ fontSize: "18px", color: "#3ED37A" }} /> : <CloseIcon sx={{ color: 'red', fontSize: "18px" }} />}
                                            </Typography>
                                            <Typography variant='body2' sx={{ fontSize: "14px", fontWeight: "100" }} >
                                                {placement.text}
                                            </Typography>
                                        </Box>
                                    ))}
                                    <Box>
                                        <Button
                                            variant='contained'
                                            fullWidth
                                            sx={{
                                                textTransform: "capitalize",
                                                backgroundColor: index === 0 ? '#162B60' : 'white', // Adjust this color for the blue card
                                                color: index === 0 ? 'white' : '#162B60' // You might also want to change text color for contrast
                                            }}
                                        >
                                            Choose Plan
                                        </Button>
                                    </Box>

                                </Box>
                            </PricingCardContainer>
                        </Grid>
                    ))}
                </Slider>
            </Container>
        </Box>
    )
}

export default Pricing;
