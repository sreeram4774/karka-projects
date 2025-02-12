import { Container, Grid, Typography, TextField, Box, Link, useTheme } from "@mui/material";
import Logo from '../assets/images/Logo.png';
import { FcPhone } from "react-icons/fc";

// const socialLinks = ["Instagram", "LinkedIn"];

// const SocialLinksSection = ({ title }) => (
//     <Grid item xs={6} sm={3} md={2}>
//         <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: "16px", sm: "20px" } }}>
//             {title}
//         </Typography>
//         <Box component="ul" sx={{ listStyle: "none", padding: 0, margin: 0, color: "rgba(255, 255, 255, 0.60)" }}>
//             {socialLinks.map((item) => (
//                 <Box component="li" key={item} sx={{ marginY: 2, fontSize: { xs: "12px", sm: "14px" } }}>
//                     <Link href="#" color="inherit" underline="hover">
//                         {item}
//                     </Link>
//                 </Box>
//             ))}
//         </Box>
//     </Grid>
// );

const Footer = () => {
    const theme = useTheme();

    return (
        <Box sx={{ backgroundColor: "#000", color: "#fff", py: { xs: 4, sm: 8 }, px: { xs: 4, sm: 4 } }}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    {/* Reusable Social Links Section */}
                    {/* {Array(4).fill().map((_, index) => (
                        <SocialLinksSection key={index} title="Follow Us" />
                    ))} */}

                    <Grid item xs={12} sm={8} md={6}>
                        <Grid container spacing={4}>
                            <Grid item xs={6} sm={4} md={4}>
                                <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: "16px", sm: "20px" } }}>
                                    Follow us
                                </Typography>
                                <Box component="ul" sx={{ listStyle: "none", padding: 0, margin: 0, color: "rgba(255, 255, 255, 0.60)" }}>
                                    {/* <Box component="li" sx={{ fontSize: { xs: "12px", sm: "14px" }, mb: 2, mt: 2 }}>
                                        <Link href="https://www.instagram.com" color="inherit" underline="hover">
                                            Instagram
                                        </Link>
                                    </Box> */}
                                    <Box component="li" sx={{ fontSize: { xs: "12px", sm: "14px" }, mb: 2, mt: 2 }}>
                                        <Link href="https://www.linkedin.com" color="inherit" underline="hover">
                                            LinkedIn
                                        </Link>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: "16px", sm: "20px" } }}>
                                    Get More Updates
                                </Typography>
                                <Box component="ul" sx={{ listStyle: "none", padding: 0, margin: 0, color: "rgba(255, 255, 255, 0.60)" }}>
                                    <Box component="li" sx={{ fontSize: { xs: "12px", sm: "14px" }, mb: 2, mt: 2 }}>
                                        <Link href="https://www.instagram.com" color="inherit" underline="hover">
                                            Instagram
                                        </Link>
                                    </Box>
                                    {/* <Box component="li" sx={{ fontSize: { xs: "12px", sm: "14px" } }}>
                                        <Link href="https://www.linkedin.com" color="inherit" underline="hover">
                                            LinkedIn
                                        </Link>
                                    </Box> */}
                                </Box>
                            </Grid>
                        </Grid>


                    </Grid>

                    {/* Newsletter Section */}
                    <Grid item xs={12} sm={4} md={6} sx={{ display: "flex", justifyContent: { xs: "flex-start", sm: "flex-end" }, textAlign: { xs: "left", sm: "right" } }}>
                        <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <img src={Logo} alt="Logo" style={{ maxWidth: "50px" }} />
                                <Typography
                                    variant="h6"
                                    component="a"
                                    href="#"
                                    sx={{
                                        fontWeight: 700,
                                        color: "inherit",
                                        textDecoration: "none",
                                        ml: 2,
                                    }}
                                >
                                    IginternTribe
                                </Typography>
                            </Box>
                            {/* <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.60)", mb: 2 }}>
                                Get latest updates
                            </Typography> */}

                            <Typography
                                variant="body2"
                                sx={{ color: "rgba(255, 255, 255, 0.60)", mb: 3, display: "flex", justifyContent: { xs: "flex-start", sm: 'flex-end' } }}
                            >
                                <FcPhone style={{ fontSize: "20px", marginRight: "8px", transform: "rotate(270deg)" }} />
                                89030 03201
                            </Typography>

                        </Box>



                        {/* <TextField
                            fullWidth
                            placeholder="Your Email"
                            sx={{
                                input: {
                                    color: "white",
                                    padding: { xs: "10px", sm: "12px" },
                                    "&::placeholder": {
                                        fontWeight: 400,
                                        fontSize: "14px",
                                        opacity: 1, // Ensures visibility in some browsers
                                        [theme.breakpoints.down(425)]: {
                                            fontSize: "12px", // Apply when screen is xs (below sm)
                                        },
                                    }
                                },
                                "& .MuiOutlinedInput-root": {
                                    border: "2px solid #A1AEBF",
                                    borderRadius: "24px",
                                },
                                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                            }}
                        /> */}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
