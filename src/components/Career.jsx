import { Box, Button, Container, Grid, Paper, Typography, styled } from '@mui/material'
import React from 'react'
import Cup from '../assets/images/Cup.png'
import Logo from '../assets/images/Logo.png'
import StarIcon from '@mui/icons-material/Star';
import Star from '../assets/images/star.svg'

const CertificatePaper = styled(Paper)({
    padding: "0px 10px",
    display: "inline",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#ffa800",
    color: "#000",
    borderRadius: "4px",
    justifyContent: "center",
    boxShadow: "none",
});

const CompanyButton = styled(Button)({
    backgroundColor: "#000",
    color: "#fff",
    border: "1px solid #A1AEBF",
    padding: "8px 16px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "140px",
    width: "140px",
    textTransform: "capitalize"
});

const Career = () => {
    return (
        <Box sx={{ backgroundColor: "#000", color: "#fff", py: { xs: 4, sm: 8 }, px: { xs: 0, sm: 8 } }}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} sx={{ textAlign: { xs: "center", sm: "left" } }}>
                        <Box>
                            <Typography variant="h4" gutterBottom sx={{ typography: { xs: "h5", sm: "h4" }, fontWeight: { sm: "bold" } }}>
                                Begin your AI Driven Tech <br />
                                Career with{" "}
                                <Typography
                                    component="span" variant="h4"
                                    sx={{ color: "#ffa800", typography: { xs: "h5", sm: "h4" }, fontWeight: { sm: "bold" } }}
                                >
                                    TalentTribe
                                </Typography>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Box>
                            <Typography
                                component="ul"
                                sx={{
                                    display: { xs: "block", sm: "none" },
                                    mb: 2,
                                    color: "rgba(255, 255, 255, 0.40)",
                                    fontSize: "14px",
                                    fontWeight: 100,
                                    paddingLeft: "0",
                                    listStyle: "none",
                                }}
                            >
                                {[
                                    "Work on real internships with verified companies and gain valuable industry experience.",
                                    "Enhance your resume and unlock new opportunities.",
                                    "No hidden barriers—hands-on practice & enhance your ability.",

                                ].map((item, index) => (
                                    <Typography
                                        component="li"
                                        key={index}
                                        sx={{
                                            display: "flex",
                                            alignItems: "flex-start", // Align icon and first line of text
                                            mb: 1,
                                        }}
                                    >
                                        {/* <StarIcon sx={{ fontSize: 16, color: "gold", mr: 1, flexShrink: 0 }} /> */}
                                        <img src={Star} alt="List" />
                                        <Typography
                                            component="span"
                                            sx={{
                                                fontSize: "14px",
                                                fontWeight: 100,
                                                marginLeft: 1,
                                                lineHeight: "1.4", // Adjust line spacing for better alignment
                                            }}
                                        >
                                            {item}
                                        </Typography>
                                    </Typography>
                                ))}
                            </Typography>

                            {/* Paragraph for larger screens */}
                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 4,
                                    color: "rgba(255, 255, 255, 0.40)",
                                    fontSize: "14px",
                                    fontWeight: 100,
                                    display: { xs: "none", sm: "block" },
                                }}
                            >
                                Work on real internships with verified companies and gain valuable industry experience.
                                No hidden barriers—hands-on practice & enhance your ability. Enhance your resume and unlock
                                new opportunities.
                            </Typography>


                            {/* <CertificatePaper elevation={0} sx={{ fontSize: '12px' }} component="span" >
                                    <img
                                        src={Cup}
                                        alt="logo"
                                        style={{ marginRight: 8, width: '35px', height: '35px', objectFit: "contain"  }}
                                    />
                                    Get Internship Certificate Directly from the Company
                                </CertificatePaper> */}
                            <CertificatePaper
                                elevation={0}
                                sx={{
                                    fontSize: '12px',
                                    display: { xs: 'flex', sm: 'inline-flex' },  // Flex on mobile, inline on larger screens
                                    alignItems: 'center',
                                    textAlign: { xs: 'left', sm: 'left' }, // Center the text on mobile
                                }}
                                component="span"
                            >
                                <img
                                    src={Cup}
                                    alt="logo"
                                    style={{
                                        marginRight: 8,
                                        width: '35px',
                                        height: '35px',
                                        objectFit: 'contain',
                                        marginTop: '-25px'
                                    }}
                                />
                                Get Internship Certificate Directly from the Company
                            </CertificatePaper>

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} mt={{ xs: 0, sm: 2 }} sx={{ textAlign: "center" }} >
                        <Box>
                            <Typography
                                variant="h4"
                                fontWeight="bold"
                                gutterBottom
                                sx={{ typography: { xs: "h5", sm: "h4" } }}
                            >
                                Get upto {" "}
                                <Typography
                                    component="span" variant="h4"
                                    sx={{ color: "#ffa800", fontWeight: "bold", typography: { xs: "h2", sm: "h4" } }}
                                >
                                    ₹15,000
                                </Typography>
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#B0B0B0", mb: 2, color: 'rgba(255, 255, 255, 0.40)', fontSize: { xs: "16px", sm: '14px' }, fontWeight: 100 }}>
                                Companies offering Certificate & Stipend.
                            </Typography>
                            {/* Company Logos */}

                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} sx={{ textAlign: "center" }}>
                        <Grid container spacing={1} sx={{ justifyContent: "center", alignItems: "center" }}>
                            {/* Button 1 */}
                            <Grid item xs={6} sm={3} md={2.5} lg={1.5} xl={1.5}>
                                <CompanyButton>
                                    <img src={Logo} alt="logo" style={{ marginRight: 8 }} />
                                    Logoipsum
                                </CompanyButton>
                            </Grid>

                            {/* Button 2 */}
                            <Grid item xs={6} sm={3} md={2.5} lg={1.5} xl={1.5}>
                                <CompanyButton>
                                    <img src={Logo} alt="logo" style={{ marginRight: 8 }} />
                                    offmax
                                </CompanyButton>
                            </Grid>

                            {/* Button 3 */}
                            <Grid item xs={6} sm={3} md={2.5} lg={1.5} xl={1.5}>
                                <CompanyButton>
                                    <img src={Logo} alt="logo" style={{ marginRight: 8 }} />
                                    offmax
                                </CompanyButton>
                            </Grid>

                            {/* Button 4 */}
                            <Grid item xs={6} sm={3} md={2.5} lg={1.5} xl={1.5}>
                                <CompanyButton>
                                    <img src={Logo} alt="logo" style={{ marginRight: 8 }} />
                                    offmax
                                </CompanyButton>
                            </Grid>
                        </Grid>
                    </Grid>



                </Grid>
            </Container>
        </Box>
    )
}

export default Career

