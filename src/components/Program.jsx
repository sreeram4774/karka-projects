import { Box, Button, Container, Grid, Paper, Typography, styled, useTheme } from '@mui/material'
import React from 'react'
import coding from '../assets/programimages/coding.svg'
import humanresources from '../assets/programimages/hr-human-resources.svg'
import FormSubmission from './FormSubmission'



const Program = () => {

    const theme = useTheme();

    // const ProgramCard = styled(Paper)({
    //     textAlign: 'left',
    //     backgroundColor: 'transparent',
    //     color: '#FFFFFF',
    //     borderRadius: '0',
    //     height: '100%',
    //     border: '1px solid #A1AEBF',
    //     padding: '20px'
    // });

    const programDataOne = [
        {
            title: 'ASSIGNMENTS',
            description: '100+ Assignments',
            details: [
                'Assignments help you practice the concepts you learn',
                'Master advanced technologies & tools',
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

    const handleClick = () => {
        const phoneNumber = "919385647154";
        const message = encodeURIComponent("Hello! I'm interested in enrolling for the InternTribe's internship program.");
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, "_blank");
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ backgroundColor: "#110f0f", color: "#fff", py: { xs: 4, sm: 8 }, px: { xs: 0, sm: 2, md: 8 } }}>
            <Container maxWidth="xl"  >
                <Box>
                    <Grid container spacing={3} >
                        <Grid item xs={12} sm={4} sx={{ textAlign: { xs: "center", sm: "left" } }}>
                            <Typography
                                variant="h4"
                                mb={3}
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
                                How does our Remote Internship Program work?
                            </Typography>

                            <Typography variant="body1" sx={{
                                color: '#728095',
                                marginBottom: { xs: 0, sm: 3 },
                                fontSize: { xs: "12px", sm: "12px", md: "13px", lg: "15px" },
                                fontWeight: 400,
                                maxWidth: { md: "100%", lg: "90%" },
                                letterSpacing: "0.02rem",
                                lineHeight: "22px"
                            }}>
                                Take your skills to the next level with a comprehensive remote internship experience. Gain hands-on practice, expert mentorship, curated resources, and real-world projects to prepare for the industry.
                            </Typography>

                            {/* <Button variant="outlined" sx={{ borderColor: "#ffa800", color: "#ffa800", borderRadius: "50px", display: { xs: 'none', sm: "block" } }}>
                                Enroll Now
                            </Button> */}

                            <Button
                                variant="outlined"
                                onClick={handleClickOpen}
                                sx={{
                                    borderColor: "#FFA800",
                                    color: "#FFA800",
                                    borderRadius: "50px",
                                    display: { xs: "none", sm: "block" },
                                    // padding: { md: "10px 22px", lg: "10px 22px" },
                                    fontWeight: 500,
                                    // fontSize: { xs: "0.8rem", sm: ".8rem", md: "12px", lg: "12px" },
                                    whiteSpace: "nowrap",
                                    transition: "all 0.3s ease", // Smooth transition for hover effect
                                    "&:hover": {
                                        backgroundColor: "#FFA800",
                                        color: "#000",
                                        borderColor: "#FFA800", // Ensure border changes along with the background
                                        boxShadow: "2px 2px 3px #FFA800"
                                    },
                                }}
                            >
                                Enroll Now
                            </Button>

                            <FormSubmission open={open} handleClose={handleClose} />


                        </Grid>
                        <Grid item sm={4} m={0} p={0}>
                            <Grid container spacing={1}>
                                {programDataOne.map((card, index) => (
                                    <Grid item key={index} xs={12} sm={12}>
                                        <Box sx={{
                                            width: '100%',
                                            overflow: 'hidden',
                                            borderRadius: '0px',
                                            border: '1px solid white',
                                            mb: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            padding: 2
                                        }}>
                                            {card.image ? <Box sx={{ backgroundColor: "#8474C4", height: "140px", display: "flex", justifyContent: "center", objectFit: "cover" }}>
                                                <img
                                                    src={card.image}
                                                    alt={card.title}
                                                    style={{ height: "100%", overflow: "hidden" }}
                                                />
                                            </Box> : ""}
                                            <Box sx={{ mt: card.image ? 2 : 0, mb: 2 }}>
                                                <Button variant='contained' size='small' sx={{ backgroundColor: "#FFA800", color: "#1A365D", fontSize: "12px", fontWeight: "600" }}>{card.title}</Button>
                                            </Box>

                                            <Typography fontSize={{ md: "20px", lg: '24px' }} fontWeight={500} mb={2}>{card.description}
                                            </Typography>

                                            <ul style={{ textAlign: "left", paddingLeft: 20 }}>
                                                {card.details.map((point, i) => (
                                                    <li key={i} style={{ color: '#728095' }}>
                                                        <Typography variant="body2" sx={{
                                                            color: '#728095',
                                                            fontSize: { xs: "13px", sm: "12px", md: "13px", lg: "15px" },
                                                            fontWeight: 400,
                                                            maxWidth: { md: "100%", lg: "90%" },
                                                            letterSpacing: "0.02rem",
                                                        }}>{point}</Typography>
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
                                    <Grid item key={index} xs={12} sm={12}>
                                        <Box sx={{
                                            width: '100%',
                                            overflow: 'hidden',
                                            borderRadius: '0px',
                                            border: '1px solid white',
                                            mb: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            padding: 2
                                        }}>
                                            {card.image ? <Box sx={{ backgroundColor: "#8474C4", height: "140px", display: "flex", justifyContent: "center", objectFit: "cover" }}>
                                                <img
                                                    src={card.image}
                                                    alt={card.title}
                                                    style={{ height: "100%", overflow: "hidden" }}
                                                />
                                            </Box> : ""}

                                            <Box sx={{ mt: card.image ? 2 : 0, mb: 2 }}>
                                                <Button variant='contained' size='small' sx={{ backgroundColor: "#FFA800", color: "#1A365D", fontSize: "12px", fontWeight: "600" }}>{card.title}</Button>
                                            </Box>
                                            <Typography fontSize={{ md: "20px", lg: '24px' }} fontWeight={500} mb={2}>{card.description}
                                            </Typography>
                                            <ul style={{ textAlign: "left", paddingLeft: 20 }}>
                                                {card.details.map((point, i) => (
                                                    <li key={i} style={{ color: '#728095' }}>
                                                        <Typography variant="body2" sx={{
                                                            color: '#728095',
                                                            fontSize: { xs: "13px", sm: "12px", md: "13px", lg: "15px" },
                                                            fontWeight: 400,
                                                            maxWidth: { md: "100%", lg: "90%" },
                                                            letterSpacing: "0.02rem",
                                                        }}>{point}</Typography>
                                                    </li>
                                                ))}
                                            </ul>

                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4} display={{ xs: 'block', sm: "none" }} textAlign={'center'} >
                            {/* <Button variant="outlined" sx={{ borderColor: "#ffa800", color: "#ffa800", borderRadius: "50px" }}>
                                Enroll Now
                            </Button> */}
                            <Button
                                variant="outlined"
                                sx={{
                                    borderColor: "#FFA800",
                                    color: "#FFA800",
                                    borderRadius: "50px",
                                    // display: { xs: "none", sm: "block" },
                                    padding: { md: "10px 22px", lg: "10px 22px" },
                                    fontWeight: 500,
                                    fontSize: { xs: "0.8rem", sm: ".8rem", md: "12px", lg: "12px" },
                                    whiteSpace: "nowrap",
                                    transition: "all 0.3s ease", // Smooth transition for hover effect
                                    "&:hover": {
                                        backgroundColor: "#FFA800",
                                        color: "#000",
                                        borderColor: "#FFA800", // Ensure border changes along with the background
                                    },
                                }}
                            >
                                Enroll Now
                            </Button>
                        </Grid>

                    </Grid>
                </Box>
            </Container >
        </Box >
    )
}

export default Program
