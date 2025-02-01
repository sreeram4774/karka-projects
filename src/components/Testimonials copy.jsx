import React, { useState, useRef } from 'react';
import { Typography, Box, IconButton, Grid, Container } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Avatar from '../assets/images/avatar.jpg'
import { Card, CardContent, CardMedia } from "@mui/material";


function Testimonials() {
    const [reviews, setReviews] = useState([
        {
            image: Avatar, // Replace with actual image URLs
            name: "Praveen Kumar",
            role: "Super Intern",
            review: "The Virtual Internship Program gave me hands-on experience and the confidence to step into the professional world. The 1:1 mentorship sessions and real-world projects were the highlights for me. Highly recommended for anyone starting their career!"
        },
        {
            image: Avatar,
            name: "Roshan Babu",
            role: "Super Intern",
            review: "The curated learning materials and assignments helped me master advanced tools and techniques. The job simulation projects gave me a real taste of industry work. This program is worth every moment invested!"
        },
        {
            image: Avatar,
            name: "Kumar",
            role: "Intern",
            review: "From curated resources to live projects, this program is designed for success. The live doubt sessions and mentorship were invaluable. I even got my internship certificate directly from the company!"
        },
        {
            image: Avatar,
            name: "Vaishnavi",
            role: "Super Intern",
            review: "Having a dedicated mentor to guide me through my journey made a huge difference. Their personalized advice and encouragement helped me achieve my goals faster. I now feel ready to take on real challenges in my field."
        },
        // Add more reviews here
    ]);

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
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Adjust based on your design
        slidesToScroll: 1,
        nextArrow: <></>, // Empty fragment to remove default next arrow
        prevArrow: <></>,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
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
        ]
    };

    return (
        <Box sx={{ backgroundColor: "#000", color: "#fff", py: 8, px: 8 }}>
            <Container maxWidth="xl">
                <Box sx={{ margin: '0 auto', /* padding: '0 20px' */ }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                        <Typography variant="h6" sx={{ marginBottom: '14px' }}>Hear what our interns say :)</Typography>
                        <Box sx={{ display: 'flex' }}>
                            <IconButton onClick={handleBack} sx={{ border: "1px solid #ffa800", mr: 2, borderRadius: '0' }}>
                                <ArrowBackIosNewIcon sx={{ color: "#ffa800", display: "flex", justifyContent: "center", alignItems: "center" }} />
                            </IconButton>

                            <IconButton onClick={handleNext} sx={{ border: "1px solid #ffa800", borderRadius: '0' }}>
                                <ArrowForwardIosIcon sx={{ color: "#ffa800", display: "flex", justifyContent: "center", alignItems: "center" }} />
                            </IconButton>
                        </Box>
                    </Box>

                    <Slider ref={sliderRef} {...settings}>
                        {reviews.map((review, index) => (
                            <Grid item key={index} xs={12} md={4} lg={3} sx={{ padding: "10px" }}>
                                <Card sx={{ padding: "20px", boxShadow: 3, borderRadius: "0", textAlign: "center", backgroundColor: "#000", border: "1px solid white", color: "white" }}>
                                    <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                        <CardMedia
                                            component="img"
                                            image={review.image}
                                            alt={review.name}
                                            sx={{ width: 80, height: 80, borderRadius: "50%" }}
                                        />
                                        <Box sx={{ textAlign: "left" }}>
                                            <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: 500 }}>
                                                {review.name}
                                            </Typography>
                                            <Typography variant="body1" sx={{ fontSize: "14px", color: "#666" }}>
                                                {review.role}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                    <CardContent>
                                        <Typography variant="body2" sx={{ marginTop: "10px", fontSize: "14px", textAlign: "left" }}>
                                            {review.review}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                        ))}
                    </Slider>
                </Box>
            </Container>

        </Box>
    );
}

export default Testimonials;