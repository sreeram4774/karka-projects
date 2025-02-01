import { Box, Button, Container, Grid, Paper, Typography, styled } from '@mui/material'
import React from 'react'
import coding from '../assets/programimages/coding.svg'
import humanresources from '../assets/programimages/hr-human-resources.svg'

const ProgramCard = styled(Paper)({
    textAlign: 'left',
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    borderRadius: '0',
    height: '100%',
    border: '1px solid #A1AEBF',
    padding: '20px'
});

const Program = () => {

    const programDataOne = [
        {
            title: 'ASSIGNMENTS',
            description: '100+ Assignments',
            details: [
                'Assignments help you practice the concepts you learn',
                'Master advanced technologies & tools technologies & tools',
            ],
            image: humanresources,
        },
        {
            title: 'MENTORSHIP',
            description: '1:1 Expert Mentorship',
            details: [
                '100 hours of free mentorship sessions for doubt clearance & support',
                'Receive personalized guidance from industry leaders',
                'Accelerate learning with a tailored roadmap to success',
            ],
        },
    ];

    const programDataTwo = [
        {
            title: 'ON-DEMAND MATERIALS',
            description: 'Upto 400 hours of curated internship experience',
            details: [
                'Learn from free resources handpicked by our experts',
            ],
        },

        {
            title: 'SIMULATIONS',
            description: '20+ Job Simulation Projects',
            details: [
                'Gain hands-on experience with practical simulations',
                'Tackle diverse projects to enhance your skills',
            ],
            image: coding,
        },
    ]

    return (
        <Box sx={{ backgroundColor: "#110f0f", color: "#fff", py: { xs: 4, sm: 8 }, px: { xs: 0, sm: 8 } }}>
            <Container maxWidth="xl" variant="h5" fontWeight="bold" >
                <Box>
                    <Grid container spacing={3} >
                        <Grid item xs={12} sm={4}>
                            <Typography variant='h4' mb={3}>How does the Virtual Internship Program help you?
                            </Typography>
                            <Typography variant='body1' mb={3} sx={{
                                color: 'rgba(255, 255, 255, 0.40)', fontSize: '13px'
                            }}>Take your skills to the next level with a comprehensive virtual internship experience. Gain hands-on practice, expert mentorship, curated resources, and real-world projects to prepare for the industry.
                            </Typography>
                            <Button variant="outlined" sx={{ borderColor: "#ffa800", color: "#ffa800", borderRadius: "50px", display: { xs: 'none', sm: "block" } }}>
                                Enroll Now
                            </Button>
                        </Grid>
                        <Grid item sm={4} m={0} p={0}>
                            <Grid container spacing={1}>
                                {programDataOne.map((card, index) => (
                                    <Grid item key={index} sm={12}>
                                        <Box sx={{
                                            width: '100%',
                                            overflow: 'hidden',
                                            borderRadius: '0px',
                                            border: '1px solid white',
                                            mb: 2,
                                            display: 'flex',
                                            flexDirection: 'column', // Stack image and content
                                            padding: 2
                                        }}>
                                            {card.image ? <Box sx={{ backgroundColor: "#8474C4", height: "130px", display: "flex", justifyContent: "center", objectFit: "cover" }}>
                                                <img
                                                    src={card.image}
                                                    alt={card.title}
                                                    style={{ height: "100%" }}
                                                />
                                            </Box> : ""}
                                            <Box sx={{ mt: card.image ? 2 : 0, mb: 2 }}>
                                                <Button variant='contained' size='small' sx={{ backgroundColor: "#FFA800", color: "#000", fontSize: "12px", fontWeight: "bold" }}>{card.title}</Button>
                                            </Box>

                                            <Typography variant="h6" mb={2}>{card.description}
                                            </Typography>
                                            <ul style={{ textAlign: "left", paddingLeft: 20 }}>
                                                {card.details.map((point, i) => (
                                                    <li key={i} style={{ color: 'rgba(255, 255, 255, 0.60)' }}>
                                                        <Typography variant="body2" sx={{ fontSize: "13px", }}>{point}</Typography>
                                                    </li>
                                                ))}
                                            </ul>

                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item sm={4} m={0} p={0}>
                            <Grid container spacing={1}>
                                {programDataTwo.map((card, index) => (
                                    <Grid item key={index} sm={12}>
                                        <Box sx={{
                                            width: '100%',
                                            overflow: 'hidden',
                                            borderRadius: '0px',
                                            border: '1px solid white',
                                            mb: 2,
                                            display: 'flex',
                                            flexDirection: 'column', // Stack image and content
                                            padding: 2
                                        }}>
                                            {card.image ? <Box sx={{ backgroundColor: "#8474C4", height: "130px", display: "flex", justifyContent: "center", objectFit: "cover" }}>
                                                <img
                                                    src={card.image}
                                                    alt={card.title}
                                                    style={{ height: "100%" }}
                                                />
                                            </Box> : ""}

                                            <Box sx={{ mt: card.image ? 2 : 0, mb: 2 }}>
                                                <Button variant='contained' size='small' sx={{ backgroundColor: "#FFA800", color: "#000", fontSize: "12px", fontWeight: "bold" }}>{card.title}</Button>
                                            </Box>
                                            <Typography variant="h6" mb={2}>{card.description}
                                            </Typography>
                                            <ul style={{ textAlign: "left", paddingLeft: 20 }}>
                                                {card.details.map((point, i) => (
                                                    <li key={i} style={{ color: 'rgba(255, 255, 255, 0.60)' }}>
                                                        <Typography variant="body2" sx={{ fontSize: "13px", }}>{point}</Typography>
                                                    </li>
                                                ))}
                                            </ul>

                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4} display={{ xs: 'block', sm: "none" }} textAlign={'center'} >
                            <Button variant="outlined" sx={{ borderColor: "#ffa800", color: "#ffa800", borderRadius: "50px" }}>
                                Enroll Now
                            </Button>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Program
