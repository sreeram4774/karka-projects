import * as React from "react";
import {
    AppBar,
    Box,
    Toolbar,
    Container,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Slide,
    TextField,
    Grid,
    Typography,
} from "@mui/material";
import Logo from "../assets/images/Logo.png";
import { useState } from "react";
import FormSubmission from "./FormSubmission";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const inputStyles = {
    // // background: "#1E1E1E",
    // borderRadius: "8px",
    // // padding: "10px",
    // "& .MuiInputLabel-root": {
    //     color: "#bbb",
    //     fontSize: "14px",
    // },
    // "& .MuiOutlinedInput-root": {
    //     color: "#fff",
    //     borderRadius: "4px",
    //     // background: "#282828", // Dark background for contrast
    //     "& fieldset": {
    //         borderColor: "#FFA800",
    //     },
    //     "&:hover fieldset": {
    //         borderColor: "#FFA800", // Yellow border on hover
    //     },
    // "&.Mui-focused fieldset": {
    //     color:"white",
    //     borderColor: "#FFA800",
    //     // boxShadow: "0 0 4px #FFA800",
    // },
    // },
};

const Header = () => {
    const [scrolled, setScrolled] = React.useState(false);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        // setFormData({
        //     name: "",
        //     email: "",
        //     phone: "",
        //     coupon: "",
        //     message: "",
        // });
        // setErrors({});
    };

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    const handleClick = () => {
        const phoneNumber = "919385647154";
        const message = encodeURIComponent("Hello! I'm interested in enrolling for the InternTribe's internship program.");
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, "_blank");
    };



    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: scrolled ? 'black' : 'transparent',
                transition: 'background-color 0.3s ease',
            }}
        >
            <Container maxWidth="100%" sx={{ background: 'rgba(15, 15, 15, 0.40)', backdropFilter: 'blur(9px)' }}>
                <Toolbar disableGutters>
                    <Box sx={{ width: { xs: "40%", sm: '20%', md: "15%", lg: "14%" }, display: "flex", alignItems: "center" }}>
                        <img
                            src={Logo}
                            alt="Logo"
                            style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'flex' }, justifyContent: 'flex-end', alignItems: 'center', fontSize: "15px" }}>

                        <Button
                            variant="contained"
                            onClick={handleClickOpen}
                            sx={{
                                ml: 2,
                                background: "#FFA800",
                                borderRadius: "50px",
                                color: "black",
                                fontSize: "13px",
                                border: "1px solid transparent",
                                transition: "all 0.3s ease-in-out",
                                "&:hover": {
                                    backgroundColor: "#000",
                                    color: "#FFA800",
                                    border: "1px solid #FFA800",
                                }
                            }}
                        >
                            Enroll Now
                        </Button>

                        <FormSubmission open={open} handleClose={handleClose} />

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
