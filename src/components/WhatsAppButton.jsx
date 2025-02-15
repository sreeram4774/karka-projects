import React from "react";
import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
    const handleClick = () => {
        const phoneNumber = "918903003201"; // Ensure this number is correct
        const message = encodeURIComponent("I want to enroll now");
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, "_blank");
    };

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
                position: "fixed",
                bottom: 30,
                right: 30,
            }}
        >
            <Fab
                color="success"
                aria-label="whatsapp"
                onClick={handleClick}
                sx={{
                    backgroundColor: "#25D366",
                    color: "#fff",
                    "&:hover": { backgroundColor: "#1EBE5D" },
                }}
            >
                <WhatsAppIcon />
            </Fab>
        </motion.div>
    );
};

export default WhatsAppButton;
