import { Container, Grid, Typography, TextField, Box, Link, useTheme } from "@mui/material";
import Logo from '../assets/images/Logo.png';
import { FcPhone } from "react-icons/fc";
// import { AiOutlineMail } from "react-icons/ai";
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';
import call from '../assets/footerimages/call.png'
import email from '../assets/footerimages/email.png'
import linkedin from '../assets/footerimages/linkedin.png'
import instagram from '../assets/footerimages/instagram.png'

import { useEffect, useState } from "react";
import whatsappLogo from '../assets/footerimages/whatsapp.png'

const Footer = () => {

    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const footerElement = document.getElementById('footer');
            const footerPosition = footerElement ? footerElement.getBoundingClientRect().top : 0;
            const isVisible = footerPosition <= window.innerHeight;
            setIsFooterVisible(isVisible);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const theme = useTheme();

    const handleClick = () => {
        const phoneNumber = "919385647154";
        const message = encodeURIComponent("Hello! I'm interested in enrolling for the InternTribe's internship program.");
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, "_blank");
    };

    return (
        <Box sx={{ backgroundColor: "#000", color: "#fff", py: { xs: 4, sm: 10, md: 10 }, px: { xs: 2, sm: 4, md: 8 } }} id="footer">
            <Container maxWidth="xl">
                <Grid container spacing={4}>


                    <Grid item xs={12} sm={8} md={6}>
                        <Grid container spacing={4}>
                            <Grid item xs={6} sm={4} md={4}>
                                <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: "14px", sm: "20px" } }}>
                                    Follow us
                                </Typography>
                                <Box component="ul" sx={{ listStyle: "none", padding: 0, margin: 0, color: "rgba(255, 255, 255, 0.60)" }}>

                                    <Box component="li" sx={{ fontSize: { xs: "12px", sm: "14px" }, mb: 2, mt: 2, display: "flex", alignItems: "center", gap: "8px" }}>
                                        <img src={linkedin} alt="" style={{ height: "25px", width: "25px" }} />
                                        <Link
                                            href="https://www.linkedin.com/company/interntribe/"
                                            color="inherit"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            LinkedIn
                                        </Link>
                                    </Box>

                                </Box>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: "12px", sm: "20px" } }}>
                                    Get More Updates
                                </Typography>
                                <Box component="ul" sx={{ listStyle: "none", padding: 0, margin: 0, color: "rgba(255, 255, 255, 0.60)" }}>
                                    <Box component="li" sx={{ fontSize: { xs: "12px", sm: "14px" }, mb: 2, mt: 2, display: "flex", alignItems: "center", gap: "8px" }}>
                                        {/* <InstagramIcon /> */}
                                        <img src={instagram} alt="" style={{ height: "25px", width: "25px" }} />
                                        <Link href="https://www.instagram.com/interntribe?igsh=YmgyMndjZXdham9o" color="inherit" target="_blank"
                                            rel="noopener noreferrer" >
                                            Instagram
                                        </Link>
                                    </Box>

                                </Box>
                            </Grid>
                        </Grid>


                    </Grid>

                    {/* Newsletter Section */}
                    <Grid item xs={12} sm={4} md={6} sx={{ display: "flex", justifyContent: { xs: "flex-start", sm: "flex-end" }, textAlign: { xs: "left", sm: "right" } }}>
                        <Box sx={{ display: "flex", alignItems: "flex-start", flexDirection: { xs: "row", sm: "column" } }}>
                            <Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: "flex-start", sm: "flex-end" }, mb: 2 }}>
                                    <Box sx={{ width: { xs: "50%", sm: "80%", md: "30%" } }}>
                                        <img
                                            src={Logo}
                                            alt="Logo"
                                            style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                        />
                                    </Box>

                                </Box>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "rgba(255, 255, 255, 0.60)",
                                        mb: 2,
                                        display: "flex",
                                        justifyContent: { xs: "flex-start", sm: "flex-end" },
                                        alignItems: "center", gap: "8px"
                                    }}
                                >
                                    <img src={email} alt="" style={{ height: "25px", width: "25px" }} />
                                    {/* <AiOutlineMail style={{ fontSize: "20px", marginRight: "8px", color: "#D14836" }} /> */}
                                    <a href="mailto:hr@interntribe.com" style={{ textDecoration: "underline", color: "inherit" }}>
                                        hr@interntribe.com
                                    </a>
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "rgba(255, 255, 255, 0.60)", mb: 2, display: "flex", justifyContent: { xs: "flex-start", sm: 'flex-end' }, alignItems: "center", gap: "8px"
                                    }}
                                >
                                    {/* <FcPhone style={{ fontSize: "20px", marginRight: "8px", transform: "rotate(270deg)" }} /> */}
                                    <img src={call} alt="" style={{ height: "25px", width: "25px" }} />
                                    <a href="tel:+919385647154" style={{ textDecoration: "underline", color: "inherit" }}>
                                        +91 93856 47154
                                    </a>
                                </Typography>
                                <Box onClick={handleClick} sx={{ width: '100%', display: "flex", justifyContent: { xs: "flex-start", sm: "flex-end" }, boxSizing: "border-box" }}>
                                    <img
                                        src={whatsappLogo}
                                        alt="Logo"
                                        style={{ width: 60, height: 60, objectFit: "cover", marginRight: -9, marginLeft: { xs: -9, sm: 0 }, cursor: "pointer" }}
                                    />
                                </Box>
                            </Box>


                        </Box>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
