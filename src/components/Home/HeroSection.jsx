import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        px: 6,
        py: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 6,
      }}
    >
      {/* LEFT SIDE - TEXT */}
      <Box maxWidth="50%">
        <Typography variant="h3" fontWeight={700}>
          Where <span style={{ color: "#ff3c3c" }}>Skills</span> 
          <br />
          are Sharpened and 
          <br />
          <span style={{ color: "#ff3c3c" }}>Code</span> Comes to Life
        </Typography>

        <Typography mt={2} color="text.secondary">
          Unlock your coding potential through interactive challenges,
          real-time feedback, and a supportive community.
        </Typography>

        <Button
          variant="contained"
          sx={{ mt: 3, borderRadius: 3, textTransform: "none" }}
          onClick={function() { navigate("/signup"); }}
        >
          Get Started
        </Button>
      </Box>

      {/* RIGHT SIDE - IMAGE */}
      <Box sx={{ position: "relative" }}>
        <img
          src="/Right Side.png"
          alt=""
          style={{ width: 400, position: "relative" }}
        />
      </Box>
    </Box>
  );
}

export default HeroSection;
