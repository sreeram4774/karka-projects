import './App.css';
import Header from './components/Header';
import { Box, Container, Stack, ThemeProvider, createTheme } from '@mui/material';
import Home from './components/Home';
import Career from './components/Career';
import ChooseUs from './components/ChooseUs';
import FAQSection from './components/FAQSection';
import FeatureSection from './components/FeatureSection';
import Pricing from './components/Pricing';
import Program from './components/Program';
import Footer from './components/Footer';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/300.css"; // Light
import "@fontsource/poppins/600.css"; // Semi-bold
import WhatsAppButton from './components/WhatsAppButton';
import CssBaseline from "@mui/material/CssBaseline";
import { useState, useEffect } from 'react';

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 16, // Default for body text
    h1: { fontSize: "2.5rem" }, // 40px
    h2: { fontSize: "2rem" }, // 32px
    h3: { fontSize: "1.75rem" }, // 28px
    body1: { fontSize: "1rem" }, // 16px (default)
    body2: { fontSize: "0.875rem" }, // 14px
  },
});

function App() {
  const [showButton, setShowButton] = useState(true);

  // Detect when the user reaches the footer
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      
      if (footer) {
        const footerPosition = footer.getBoundingClientRect();
        // If footer is near the bottom of the screen, hide the button
        if (footerPosition.top <= window.innerHeight) {
          setShowButton(false);
        } else {
          setShowButton(true);
        }
      }
    };

    // Set up the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Header />
        <Stack>
          <Home />
          <Career />
          <FeatureSection />
          <ChooseUs />
          <Pricing />
          <Program />
          <Courses />
          <Footer id="footer" />
        </Stack>
      </Box>
      {/* Conditionally render the WhatsApp Button */}
      {showButton && <WhatsAppButton />}
    </ThemeProvider>
  );
}

export default App;
