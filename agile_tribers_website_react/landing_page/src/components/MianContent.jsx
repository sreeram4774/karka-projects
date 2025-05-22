import { Box, Typography, Button, Container, AppBar, Toolbar } from "@mui/material";
import { useState, useEffect } from "react";
import logos from "../assets/Vector1.png";
import square from "../assets/Vector3.png";
import intern from '../assets/Intern.png';
import Hover from './Hoverbox'

const Header = () => {
    const [navBg, setNavBg] = useState("rgba(0, 0, 0, 0.5)");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavBg("black");
            } else {
                setNavBg("rgba(0, 0, 0, 0.5)");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: navBg,
                backdropFilter: "blur(9px)",
                boxShadow: "none",
                zIndex: 1100,
                transition: "0.3s ease-in-out",
            }}
        >
            <Toolbar sx={{
                display: "flex", justifyContent: "space-between", paddingX: 2, boxShadow: "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)"
                ,
            }}>
                <Box
                    component="img"
                    src={intern}
                    alt="Intern Logo"
                    sx={{
                        width: { xs: "100px", sm: "120px", md: "140px", lg: "260px" },
                        height: "auto",
                        maxWidth: "100%",
                    }}
                />

                <Button
                    sx={{
                        backgroundColor: "rgb(255, 168, 0)",
                        color: "black",
                        fontWeight: '500',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: "13px",
                        padding: "7px 15px",
                        textTransform: "uppercase",
                        borderRadius: "50px",
                        "&:hover": {
                            backgroundColor: "black",
                            color: "rgb(255, 168, 0)",
                            border: "1px solid rgb(255, 168, 0)",
                        },
                    }}
                >
                    ENROLL NOW
                </Button>
            </Toolbar>
        </AppBar>
    );
};

const MainContent = () => {
    return (
        <Box
            sx={{
                width: "100%",
                minHeight: { xs: "153vh", sm: "87vh", md: "95vh", lg: '91vh' },
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "rgb(17, 15, 15)",
                backgroundImage: `url(${square})`,
                backgroundRepeat: "no-repeat",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "80px",
                position: "relative",
            }}
        >
            <Container sx={{ textAlign: "center",display:'flex',justifyContent:'center',height:'70vh',lineHeight:'1.2'}}>
                <Box>
                    <Box sx={{ display: 'flex', gap: "15px", justifyContent: 'center' }}>
                        <Typography variant="span" sx={{ color: "white", fontWeight: "500", fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(68deg, rgb(1, 168, 196) -1.82%, rgb(251, 254, 127) 106.59%)', WebkitTextFillColor: "transparent", WebkitBackgroundClip: "text", display: 'inline-block', fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' ,lineHeight:'1.2'} }}>
                            Internships{" "}
                        </Typography>
                        <Typography
                            component="span"
                            sx={{ fontWeight: "normal", display: 'flex', color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: { xs: '1.3rem', md: '1.6rem', sm: '2.2rem', lg: '2.5rem',marginTop:'1rem', fontWeight: "500"}}}>
                            with
                        </Typography>
                    </Box>
                    <Typography variant="h1" sx={{ color: "white", fontWeight: "500", fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(218deg, rgb(157, 232, 238) 25.05%, rgb(157, 232, 238) 25.05%, rgb(250, 124, 11) 51.71%, rgb(159, 140, 237) 79.45%)', WebkitTextFillColor: 'transparent', WebkitBackgroundClip: "text", fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4rem',lineHeight:'1.2' } }}>
                        Job Simulations
                    </Typography>
                    <Typography
                        component="span"
                        sx={{ fontWeight: "medium", color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: { xs: '1.3rem', md: '1.6rem', sm: '2.2rem', lg: '2.5rem' } }}>
                        @
                    </Typography>
                    <Typography variant="h1" sx={{ color: "white", fontWeight: "500", fontFamily: 'Poppins, sans-serif', margin: '16px 0px 0px', fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' ,marginBottom:'1rem',lineHeight:'1.2'} }}>
                        Verified
                        <Typography variant="h2" sx={{ color: "white", fontWeight: "500", fontFamily: 'Poppins, sans-serif', fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' ,lineHeight:'1.2'} }}>
                            Companies
                        </Typography>
                    </Typography>
                    <Typography variant="span" sx={{ fontFamily: "Poppins, sans-serif", color: "rgba(255, 255, 255, 0.6)",fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.8rem',lg:'15px'},}}>
                        <Box component="span" sx={{ color: "rgb(157, 232, 238)", fontWeight: "700" }}>
                            InternTribe
                        </Box>{" "}
                        is a{" "}
                        <Box component="span" sx={{ color: "rgb(157, 232, 238)", fontWeight: "700" }}>
                            Virtual Internship Platform
                        </Box>{" "}
                        where{" "}
                        <Box component="span" sx={{ color: "rgb(157, 232, 238)", fontWeight: "700" }}>
                            Interns
                        </Box>{" "}
                        meet{" "}
                        <Box component="span" sx={{ color: "rgb(157, 232, 238)", fontWeight: "700" }}>
                            Companies.
                        </Box>{" "}
                        Online / Hybrid
                    </Typography>
                    <Box sx={{height:'70px',}}>
                    <Hover/>
                    </Box>
                </Box>  
            </Container>
            <Box
                component="img"
                src={logos}
                alt="Logos"
                sx={{
                    position: "absolute",
                    left: "-7%",
                    top: { xs: "30%", sm: "22%", md: '20%', lg: "45.3%" },
                    width: { xs: "250px", sm: "400px", md: "280px", lg: "460px" },
                    transformOrigin: "center",
                    opacity: 0.9,
                }}
            />
        </Box>
    );
};

const HomePage = () => {
    return (
        <>
            <Header />
            <MainContent />
        </>
    );
};

export default HomePage;
