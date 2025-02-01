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
import Main from './components/Main';

function App() {


  return (
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
        <FAQSection />
        <Courses />
        <Footer />
      </Stack>
    </Box>
  );
}

export default App;
