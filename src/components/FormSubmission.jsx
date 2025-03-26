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
    // Slide,
    TextField,
    Grid,
    Typography,
} from "@mui/material";
import Logo from "../assets/images/Logo.png";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const FormSubmission = ({ open, handleClose }) => {

    // const [open, setOpen] = React.useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        coupon: "",
        message: "",
    });
    const [errors, setErrors] = useState({});


    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    //     setFormData({
    //         name: "",
    //         email: "",
    //         phone: "",
    //         coupon: "",
    //         message: "",
    //     });
    //     setErrors({});
    // };

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

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

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

            if (response) {
                handleClose();
                // alert("Form submitted successfully!");
                toast.success("Form Submitted Successfully");
                setFormData({ name: "", email: "", phone: "", coupon: "", message: "" }); // Clear form data

            } else {
                alert("Something Went Wrong");
            }

        } catch (error) {
            console.error("Submission error:", error);
            alert("Failed to submit form. Check console for details.");
        }
    };

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <Dialog open={open} onClose={handleClose} keepMounted>
                <Box sx={{ padding: "20px", backgroundColor: "#fff", borderRadius: "10px" }}>
                    <Box /* sx={{ background: "black" }} */>
                        <DialogTitle
                            sx={{
                                fontWeight: "500",
                                textAlign: "center",
                                fontSize: { xs: "28px", sm: "25px", md: "30px", lg: "40px" },
                            }}>
                            Contact Us
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
        </>
    )
}

export default FormSubmission
