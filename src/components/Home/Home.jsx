import { Box } from "@mui/material";
import HeroSection from "./HeroSection";
import Features from "./Features";
import Testimonials from "./Testimonials";
import BuiltFor from "./BuiltFor";
import HowItWorks from "./HowItWorks";
import Newsletter from "./NewsLetter";
import Footer from "./Footer";

function Home() {
  return (
    <Box>
      <HeroSection />
      <Features />
      <Testimonials />
      <BuiltFor />
      <HowItWorks />
      <Newsletter />
      <Footer />
    </Box>
  );
}

export default Home;
