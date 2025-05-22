import React from "react";
import { Box, Typography } from "@mui/material";
import { styled, keyframes } from "@mui/system";

// Keyframe Animations
const moveTop = keyframes`
  0% { width: 0; left: 0; }
  100% { width: 100%; left: 0; }
`;

const moveRight = keyframes`
  0% { height: 0; top: 0; }
  100% { height: 100%; top: 0; }
`;

const moveBottom = keyframes`
  0% { width: 0; right: 0; }
  100% { width: 100%; right: 0; }
`;

const moveLeft = keyframes`
  0% { height: 0; bottom: 0; }
  100% { height: 100%; bottom: 0; }
`;

// Animated Border Span
const BorderSpan = styled("span")(({ animation, duration, delay, isHorizontal }) => ({
  position: "absolute",
  background: "linear-gradient(90deg, #2e3393, #1cfafc)",
  animation: `${animation} ${duration} ease-in-out infinite`,
  animationDelay: delay,
  ...(isHorizontal
    ? { height: "3px", width: "0%" } // For top & bottom
    : { width: "3px", height: "0%" }) // For left & right
}));

// Button Container
const AnimatedButton = styled(Box)({
  position: "relative",
  display: "inline-flex",
  padding: "10px 20px",
  fontSize: "14px",
  fontWeight: "bold",
  color: "white",
  backgroundColor: "#000",
  borderRadius: "6px",
  overflow: "hidden",
  cursor: "pointer",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid transparent",
});

// Button Component
const BorderAnimation = () => {
  return (
    <AnimatedButton>
      {/* Top Border */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "0%",
          height: "3px",
          background: "linear-gradient(90deg, #2e3393, #1cfafc)",
          animation: `${moveTop} 1.5s ease-in-out infinite`,
        }}
      />
      {/* Right Border */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "3px",
          height: "0%",
          background: "linear-gradient(180deg, #2e3393, #1cfafc)",
          animation: `${moveRight} 1.5s ease-in-out infinite 0.5s`,
        }}
      />
      {/* Bottom Border */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "0%",
          height: "3px",
          background: "linear-gradient(90deg, #2e3393, #1cfafc)",
          animation: `${moveBottom} 1.5s ease-in-out infinite 1s`,
        }}
      />
      {/* Left Border */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "3px",
          height: "0%",
          background: "linear-gradient(180deg, #2e3393, #1cfafc)",
          animation: `${moveLeft} 1.5s ease-in-out infinite 1.5s`,
        }}
      />

      {/* Button Text */}
      <Typography fontWeight="bold" sx={{ display: "flex", gap: "6px" }}>
        <span>APPLY FOR</span>
        <span style={{ fontWeight: "bold", color: "#ffa800" }}>SPONSORSHIP</span>
      </Typography>
    </AnimatedButton>
  );
};

export default BorderAnimation;
