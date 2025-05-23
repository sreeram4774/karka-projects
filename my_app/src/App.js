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

        if (footerPosition.top <= window.innerHeight) {
          setShowButton(false);
        } else {
          setShowButton(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

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

      {showButton && <WhatsAppButton />}
    </ThemeProvider>
  );
}

export default App;
