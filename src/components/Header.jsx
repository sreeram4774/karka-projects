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
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        coupon: "",
        message: "",
    });
    const [errors, setErrors] = useState({});


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setFormData({
            name: "",
            email: "",
            phone: "",
            coupon: "",
            message: "",
        });
        setErrors({});
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

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required.";
        if (!formData.email.trim()) {
            tempErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            tempErrors.email = "Invalid email format.";
        }
        if (!formData.phone.trim()) {
            tempErrors.phone = "Phone number is required.";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            tempErrors.phone = "Phone number must be 10 digits.";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleClick = () => {
        const phoneNumber = "919385647154";
        const message = encodeURIComponent("Hello! I'm interested in enrolling for the InternTribe's internship program.");
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, "_blank");
    };


    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    // Handle form submission
    // const handleSubmit = async () => {
    //     const { name, email, phone, coupon, message } = formData;

    //     if (!name || !email || !phone || !message) {
    //         alert("Please fill all required fields.");
    //         return;
    //     }

    //     try {
    //         const response = await fetch("http://localhost:5000/send-email", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 name,
    //                 email,
    //                 phone,
    //                 coupon,  // ✅ Ensure coupon is sent
    //                 message
    //             }),
    //         });

    //         if (response.ok) {
    //             alert("Email sent successfully!");
    //             setFormData({ name: "", email: "", phone: "", coupon: "", message: "" });
    //             handleClose();
    //         } else {
    //             alert("Failed to send email. Please try again.");
    //         }
    //     } catch (error) {
    //         console.error("Error sending email:", error);
    //         alert("An error occurred while sending the email.");
    //     }
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            coupon: event.target.coupon.value,
            message: event.target.message.value,
        };

        console.log("Sending data:", formData);

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbyc1GbZ7hGpocD6DD0GfGtgpTyq7xtLrFdkQ-vNQzgtWPuUCl44MILQK01h0igaljeO/exec", {
                method: "POST",
                mode: "no-cors", // Allow cross-origin requests
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            // console.log(response.body);
            // const result = await response.json();
            // console.log("Response:", result);

            if (response) {
                handleClose();
                alert("Form submitted successfully!");
              } else {
                alert("Something Went Wrong");
              }

            // alert("Data Added Successfully");
        } catch (error) {
            console.error("Submission error:", error);
            alert("Failed to submit form. Check console for details.");
        }
    };
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     if (!validateForm()) return;

    //     const formDataToSend = {
    //         name: formData.name.trim(),
    //         email: formData.email.trim(),
    //         phone: formData.phone.trim(),
    //         coupon: formData.coupon.trim() || "Not Provided",
    //         message: formData.message.trim() || "Not Provided",
    //     };

    //     try {
    //         const response = await fetch("http://localhost:3001/submit-form", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(formDataToSend),
    //         });

    //         if (!response.ok) throw new Error("Failed to submit form");

    //         const result = await response.json();
    //         alert(result.message);

    //         handleClose();
    //     } catch (error) {
    //         console.error("Error:", error);
    //         alert("Failed to submit form. Please try again.");
    //     }
    // };


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

                        <a href="#apply-now" style={{ textDecoration: 'none' }} onClick={handleClick}>
                            <Button
                                variant="contained"
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
                        </a>
                        <Dialog open={open} onClose={handleClose} keepMounted>
                            <Box sx={{ padding: "20px", backgroundColor: "#fff", borderRadius: "10px" }}>
                                <Box /* sx={{ background: "black" }} */>
                                    <DialogTitle>
                                        <Typography
                                            variant="h4"
                                            fontWeight="500"
                                            gutterBottom
                                            align="center"
                                            sx={{
                                                // color: '#FFA800',
                                                fontSize: { xs: "28px", sm: "25px", md: "30px", lg: "40px" },
                                            }}>
                                            Contact Us
                                        </Typography>

                                    </DialogTitle>
                                    <DialogContent>
                                        <form onSubmit={handleSubmit}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        margin="dense"
                                                        size="small"
                                                        label="Name"
                                                        name="name"
                                                        type="text"
                                                        required
                                                        fullWidth
                                                        variant="outlined"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        autoComplete="off"
                                                        error={!!errors.name}
                                                        helperText={errors.name}
                                                        InputProps={{ style: { color: "#000" } }}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        margin="dense"
                                                        size="small"
                                                        label="Email"
                                                        required
                                                        name="email"
                                                        type="email"
                                                        fullWidth
                                                        variant="outlined"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        autoComplete="off"
                                                        error={!!errors.email}
                                                        helperText={errors.email}
                                                        InputProps={{ style: { color: "#000" } }}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        margin="dense"
                                                        size="small"
                                                        label="Phone Number"
                                                        name="phone"
                                                        required
                                                        type="number"
                                                        fullWidth
                                                        variant="outlined"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        autoComplete="off"
                                                        error={!!errors.phone}
                                                        helperText={errors.phone}
                                                        InputProps={{ style: { color: "#000" } }}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        margin="dense"
                                                        size="small"
                                                        label="Coupon Code"
                                                        name="coupon"
                                                        type="text"
                                                        fullWidth
                                                        variant="outlined"
                                                        value={formData.coupon}
                                                        onChange={handleChange}
                                                        autoComplete="off"
                                                        InputProps={{ style: { color: "#000" } }}

                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        margin="dense"
                                                        size="small"
                                                        label="Message"
                                                        name="message"
                                                        type="text"
                                                        fullWidth
                                                        multiline
                                                        rows={3}
                                                        variant="outlined"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        autoComplete="off"
                                                        error={!!errors.message}
                                                        helperText={errors.message}
                                                        InputProps={{ style: { color: "#000" } }}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <DialogActions sx={{ justifyContent: "center", marginTop: "20px" }}>
                                                <Button variant="outlined" onClick={handleClose} sx={{ color: "#FFA800", border: "1px solid #FFA800" }}>
                                                    Cancel
                                                </Button>
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    sx={{
                                                        background: "#FFA800",
                                                        "&:hover": { backgroundColor: "#000", color: "#FFA800" },
                                                    }}
                                                    disabled={Object.keys(errors).length > 0}
                                                >
                                                    Submit
                                                </Button>
                                            </DialogActions>
                                        </form>
                                    </DialogContent>

                                </Box>

                            </Box>

                        </Dialog>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
