import * as React from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Grid,
    Button,
    Box,
    Slide,
    styled
} from "@mui/material";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const FormSubmission = ({ open, handleClose }) => {
    const formatDate = (dateString,two_digit = false) => {
        if (!dateString) return '-';
        
        try {
            const date = new Date(dateString);
            
            // Check if date is valid
            if (isNaN(date.getTime())) {
                return dateString;
            }
            const months = [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ];
    
            // Get day, month and year
            const day = date.getDate().toString().padStart(2, '0');
            const month = months[date.getMonth()];
            const year = date.getFullYear();
            const formattedYear = two_digit ? String(year).slice(-2) : year;
    
            // Return formatted date
            return `${day} ${month} ${formattedYear}`;
            
        } catch (error) {
            console.error('Error formatting date:', error);
            return dateString;
        }
    }; 
    const todayDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
    const today = formatDate(todayDate);

    // const [open, setOpen] = React.useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required.";
        if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            tempErrors.email = "Invalid email format.";
        }
        if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) {
            tempErrors.phone = "Phone number must be 10 digits.";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    // const handleChange = (event) => {
    //     let { name, value } = event.target;

    //     if (name === "phone") {
    //         value = value.replace(/\D/g, "");
    //         if (value.length > 10) return;
    //     } else if (name === "name") {
    //         value = value
    //             .toLowerCase()
    //             .replace(/\b\w/g, (char) => char.toUpperCase());
    //     }

    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleBlur = (event) => {
    //     const { name, value } = event.target;

    //     if (name === "email") {
    //         const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //         setErrors({ ...errors, email: value && !emailPattern.test(value) ? "Invalid email format" : "" });
    //     }
    // };
    // console.log("date",formatDate(todayDate));


    const handleChange = (event) => {
        let { name, value } = event.target;

        if (name === "phone") {
            value = value.replace(/\D/g, ""); // Remove non-numeric characters
            if (value.length > 10) return; // Restrict to 10 digits
        } else if (name === "name") {
            value = value
                .toLowerCase()
                .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
        }

        setFormData({ ...formData, [name]: value });

        // Live validation while typing
        if (name === "email") {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            setErrors({ ...errors, email: value && !emailPattern.test(value) ? "Invalid email format" : "" });
        } else if (name === "phone") {
            setErrors({ ...errors, phone: value.length !== 10 ? "Phone number must be 10 digits" : "" });
        } else if (name === "name") {
            setErrors({ ...errors, name: value.trim() === "" ? "Name is required" : "" });
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm()) return;
        setIsSubmitting(true);
        const finalData ={
            ...formData,
            date:today
        }
        console.log(finalData);

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbynYjvCdflW9mYlMWmtZklLvbDLUQAcVdkm5MyotGX0CP4GX3iFY0kbgp9dozo0Q7cg/exec", {
                method: "POST",
                mode: "no-cors", // Allow cross-origin requests
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(finalData)
            });

            if (response) {
                toast.dismiss(); // Remove any existing toasts
                setFormData({ name: "", email: "", phone: "", city: "", message: "" });
                handleClose();

                // Delay the toast to prevent UI glitches
                setTimeout(() => {
                    toast.success("Form Submitted Successfully");
                }, 500);

            } else {
                toast.error("Something Went Wrong");
            }


        } catch (error) {
            console.error("Submission error:", error);
            alert("Failed to submit form");
        }
        finally {
            setIsSubmitting(false);
        }
    };


    React.useEffect(() => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            city: "",
            message: ""
        });
    }, []);

    React.useEffect(() => {
        if (open) {
            setErrors({});
        }
    }, [open]);

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

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                disableEnforceFocus
                disableAutoFocus
                BackdropProps={{
                    style: { backgroundColor: "rgba(0, 0, 0, .8)" },
                }}
            >
                <Box sx={{
                    // padding: "20px",
                    // backgroundColor: "#fff",
                    // borderRadius: "10px"
                    background: "#1A181B",
                    border: "1px solid #3C3A3D",
                    // borderRadius: "8px",
                    // boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.08)",
                    px: { xs: 0, sm: 5 },
                    py: { xs: 0, sm: 3 },
                }}>
                    {/* <Box > */}
                    <DialogTitle
                        sx={{
                            fontWeight: "700",
                            textAlign: "center",
                            fontSize: { xs: "28px", sm: "25px", md: "30px" },
                            color: "#fff"
                        }}>
                        Enroll Now
                    </DialogTitle>

                    <DialogContent>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        margin="dense"
                                        size="small"
                                        label={<span>Name <span style={{ color: "red" }}>*</span></span>}
                                        name="name"
                                        type="text"
                                        // required
                                        fullWidth
                                        variant="outlined"
                                        value={formData.name}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        error={!!errors.name}
                                        helperText={errors.name}
                                        InputProps={{
                                            style: { color: "#fff" }, // White input text
                                        }}
                                        InputLabelProps={{
                                            style: { color: "#fff", padding: "0 4px" }, // Background fix

                                        }}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                "& fieldset": { borderColor: "#3C3A3D" }, // White border
                                                "&:hover fieldset": { borderColor: "#3C3A3D" },
                                                "&.Mui-focused fieldset": { borderColor: "#3C3A3D" },
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        margin="dense"
                                        size="small"
                                        // required
                                        label={<span>Email <span style={{ color: "red" }}>*</span></span>}

                                        name="email"
                                        type="email"
                                        fullWidth
                                        variant="outlined"
                                        value={formData.email}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        // onBlur={handleBlur}
                                        error={!!errors.email}
                                        helperText={errors.email}
                                        InputProps={{
                                            style: { color: "#fff" }, // White input text
                                        }}
                                        InputLabelProps={{
                                            style: { color: "#fff", padding: "0 4px" }, // Background fix

                                        }}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                "& fieldset": { borderColor: "#3C3A3D" }, // White border
                                                "&:hover fieldset": { borderColor: "#3C3A3D" },
                                                "&.Mui-focused fieldset": { borderColor: "#3C3A3D" },
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        margin="dense"
                                        size="small"
                                        label={<span>Phone Number <span style={{ color: "red" }}>*</span></span>}
                                        name="phone"
                                        // required
                                        type="tel"  // Changed from "number" to "text"
                                        inputMode="numeric"
                                        pattern="[0-9]*"
                                        fullWidth
                                        variant="outlined"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        error={!!errors.phone}
                                        helperText={errors.phone}
                                        InputProps={{
                                            style: { color: "#fff" },
                                        }}
                                        InputLabelProps={{
                                            style: { color: "#fff", padding: "0 4px" },
                                        }}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                "& fieldset": { borderColor: "#3C3A3D" },
                                                "&:hover fieldset": { borderColor: "#3C3A3D" },
                                                "&.Mui-focused fieldset": { borderColor: "#3C3A3D" },
                                            },
                                        }}
                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        margin="dense"
                                        size="small"
                                        label="City"
                                        name="city"
                                        type="text"
                                        fullWidth
                                        variant="outlined"
                                        value={formData.city}
                                        onChange={handleChange}
                                        // autoComplete="on"
                                        InputProps={{
                                            style: { color: "#fff" }, // White input text
                                        }}
                                        InputLabelProps={{
                                            style: { color: "#fff", padding: "0 4px" }, // Background fix

                                        }}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                "& fieldset": { borderColor: "#3C3A3D" }, // White border
                                                "&:hover fieldset": { borderColor: "#3C3A3D" },
                                                "&.Mui-focused fieldset": { borderColor: "#3C3A3D" },
                                            },
                                        }}
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
                                        // error={!!errors.message}
                                        // helperText={errors.message}
                                        InputProps={{
                                            style: { color: "#fff" }, // White input text
                                        }}
                                        InputLabelProps={{
                                            style: { color: "#fff", padding: "0 4px" }, // Background fix

                                        }}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                "& fieldset": { borderColor: "#3C3A3D" }, // White border
                                                "&:hover fieldset": { borderColor: "#3C3A3D" },
                                                "&.Mui-focused fieldset": { borderColor: "#3C3A3D" },
                                            },
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <DialogActions sx={{ px: 0, py: "16px", gap: "10px" }}>
                                <Button variant="outlined" onClick={handleClose} sx={{ color: "#FFA800", border: "1px solid #FFA800" }}>
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        background: "#FFA800",
                                        "&:hover": { backgroundColor: "rgba(255, 169, 0, .9)" },
                                        "&.Mui-disabled": {
                                            backgroundColor: "rgba(255, 169, 0, .9)",
                                            color: "#fff",
                                            opacity: 1, // Ensure it's not too faded
                                        },
                                    }}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </Button>
                            </DialogActions>
                        </form>
                    </DialogContent>

                    {/* </Box> */}

                </Box>

            </Dialog>
        </>
    )
}

export default FormSubmission
