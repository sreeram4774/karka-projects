import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import whatsappAnimation from "../assets/json/whatsapp-animation.json"; // Add your animation file

const WhatsAppButton = () => {
    const handleClick = () => {
        const phoneNumber = "918903003201";
        const message = encodeURIComponent("Hello! I'm interested in enrolling for the internship program.");
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, "_blank");
    };

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClick}
            style={{
                position: "fixed",
                bottom: 20, // Adjust to avoid overlap with footer
                right: 10,
                zIndex: 1000,
                cursor: "pointer",
            }}
            aria-label="Chat on WhatsApp"
        >
            <div style={{ position: "relative", zIndex: 99999 }}>
                <Lottie
                    animationData={whatsappAnimation}
                    loop={true}
                    style={{
                        width: 90,
                        height: 90,
                        cursor: "pointer",
                        background: "none",
                        backgroundColor: "transparent",
                    }}
                />
            </div>
        </motion.div>
    );
};

export default WhatsAppButton;
