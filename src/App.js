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



const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        {/* <Main /> */}
        <Header />
        <Stack>
          <Home />
          <Career />
          <FeatureSection />
          <ChooseUs />
          <Pricing />
          <Program />
          {/* <Testimonials /> */}
          {/* <FAQSection /> */}
          <Courses />
          <Footer />
        </Stack>
      </Box>
    </ThemeProvider>

  );
}


export default App;
