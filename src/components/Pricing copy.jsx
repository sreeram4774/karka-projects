import { Box, Button, Chip, Container, Grid, Paper, Typography, styled } from '@mui/material'
import React from 'react'
import EastIcon from '@mui/icons-material/East';
import VerifiedIcon from '@mui/icons-material/Verified';
import CloseIcon from '@mui/icons-material/Close';

const PricingCardContainer = styled(Paper)(({ theme, bgColor }) => ({
    textAlign: 'left',
    backgroundColor: bgColor, 
    color: '#FFFFFF',
    borderRadius: '20px',
    height: '100%',
    border: '1px solid #A1AEBF',
    padding: '20px'
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
    ]

    return (
        <Box sx={{ backgroundColor: "#110f0f", color: "#fff", py: { xs: 4, sm: 8 }, px: { xs: 0, sm: 8 } }}>
            <Container maxWidth="md" align="center">
                <Box>
                    <Container maxWidth="sm" >
                        <Typography variant="h4" gutterBottom sx={{
                            fontWeight: 'bold',
                            marginBottom: 3
                        }}>
                            Some pieces of our solutions
                        </Typography>
                        <Typography variant='body1' sx={{ color: 'rgba(255, 255, 255, 0.40)', fontSize: '13px' }}>
                            We have solved your problem of finding and internship and excelling in your career into these two buckets below
                        </Typography>
                    </Container>
                </Box>
                <Grid container spacing={4} mt={2}>
                    {pricingData.map((card, index) => (
                        <Grid item xs={12} sm={6} key={index} >
                            <PricingCardContainer elevation={3} bgColor={index === 0 ? '#110f0f' : '#162B60'}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 1 }}>
                                    <Chip label={card.title} size="small" sx={{
                                        background: 'rgba(255, 255, 255, 0.15)', color: "white", fontSize:"12px"
                                    }} />
                                    <Chip label={card.subtitle} size="small" sx={{
                                        background: '#FFEAEA',
                                        color: "#CA3E41",fontSize:"12px"
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

                                <Button variant="contained" sx={{ textTransform: 'none', backgroundColor: "#ffa800", color: 'black', borderRadius: "10px" }}>
                                    Secure Your February Spot <EastIcon />
                                </Button>

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
                </Grid>
            </Container>
        </Box >
    )
}

export default Pricing;
