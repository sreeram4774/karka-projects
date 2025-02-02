import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import {
    Grid,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    styled,
} from '@mui/material';
import Group from '../assets/images/Group.svg'
import CheckBg from '../assets/images/CheckBackground.png'
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useScrollTrigger } from "@mui/material";

const CouseContainer = styled(Container)({
    backgroundColor: "#FFB219",
    padding: "20px",
    backgroundImage: `url(${CheckBg})`,
    backgroundPosition: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
})



const Courses = () => {
    const services = [
        "Frontend UI Development",
        "Backend API Development",
        "Mobile App Development",
        "UI/UX Design",
        "Digital Marketing",
        "AI & Data Analysis",
        "E-commerce and WordPress Solutions",
        "Graphic Design"
    ];

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100, // Show button after scrolling 100px
    });

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Box sx={{ backgroundColor: "#110f0f", py: { xs: 4, sm: 8 }, px: { xs: 2, sm: 8 } }}>


            <Container maxWidth="xl" >
                <Box display="flex" justifyContent='end'>
                    <Zoom in={trigger} >
                        <Fab
                            // color="primary"
                            // size="small"
                            onClick={handleScrollTop}
                            sx={{
                                borderRadius: '50px', width: "auto", height: "auto", padding: '0 20px', background: 'transparent', border: "1px solid #FFA800", color: "#FFA800", "&:hover": {
                                    background: "transparent", 
                                }
                            }}
                        >
                            Go To Top
                        </Fab>

                    </Zoom>
                </Box>
                <CouseContainer maxWidth="xl" sx={{ marginTop: 4 }}>
                    <Typography variant="h5" align="center" sx={{ fontWeight: 'bold', marginBottom: 2, typography: { xs: "h6", sm: "h4" } }}>Become Job Ready with AI</Typography>
                    <Typography variant="body1" align="center" fontSize="12px" sx={{ typography: { xs: "body2", sm: "body1" } }} >
                        Learn to use tools used in industry
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Grid container maxWidth="lg" spacing={4} mt={1} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center", flexDirection: { xs: "column", sm: "row" } }}>
                                <Box sx={{ width: "180px", height: "180px" }}>
                                    <img src={Group} alt="group" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                </Box>
                                <Box ml={2} mt={{ xs: 2, sm: 0 }}>
                                    {services.map((service, index) => (
                                        <Typography sx={{ fontSize: { xs: "11px", sm: "13px" }, fontWeight: "bold" }} key={index}>{index + 1}. {service}</Typography>
                                    ))}
                                </Box>
                            </Grid>


                            <Grid item xs={12} md={5}>
                                <Box>
                                    <TextField
                                        fullWidth
                                        placeholder="Your Name"
                                        sx={{
                                            input: { color: "#000", padding: { xs: "10px", sm: "15px" } },
                                            marginBottom: 1,
                                            "& .MuiOutlinedInput-root": {
                                                border: "2px solid #A1AEBF",
                                                backgroundColor: "white",
                                                borderRadius: "40px",
                                            },
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                border: "none",
                                            },
                                        }}
                                    />
                                    <TextField
                                        fullWidth
                                        placeholder="Your Email"
                                        sx={{
                                            input: { color: "#000", padding: { xs: "10px", sm: "15px" } },
                                            marginBottom: 2,
                                            "& .MuiOutlinedInput-root": {
                                                border: "2px solid #A1AEBF",
                                                backgroundColor: "white",
                                                borderRadius: "40px",
                                            },
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                border: "none",
                                            },
                                        }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label={<Typography sx={{ fontSize: { xs: "14px", sm: "17px" } }}>I agree to Terms & Conditions</Typography>}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label={<Typography sx={{ fontSize: { xs: "14px", sm: "17px" } }}>Send Whatsapp updates</Typography>}
                                        sx={{ marginBottom: 2 }}
                                    />
                                    <Button variant="contained" fullWidth sx={{ borderRadius: "50px", backgroundColor: "black" }}>
                                        DOWNLOAD BROCHURE
                                    </Button>
                                </Box>
                            </Grid>


                        </Grid>
                    </Box>

                </CouseContainer>

            </Container>



        </Box>
    )
}

export default Courses
