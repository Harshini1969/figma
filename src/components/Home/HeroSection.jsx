import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <Box
                sx={{
                  px: { xs: 3, md: 6 },
                  py: { xs: 6, md: 8 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 6,
                  flexWrap: { xs: "wrap", md: "nowrap" },
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "0", 
                }}
              >

                  {/* LEFT SIDE - TEXT + VECTORS */}
      <Box sx={{ position: "relative", maxWidth: { xs: "100%", md: "50%" } }}>
        {/* LEFT TOP VECTOR */}
        <Box
          component="img"
          src="/Vector.png"
          alt="left-top"
          sx={{
            position: "absolute",
            top: "-140px",
            left: "-85px",
            width: 70,
            zIndex: 0,
          }}
        />

        {/* LEFT BOTTOM VECTOR */}
        <Box
          component="img"
          src="/Vector.png"
          alt="left-bottom"
          sx={{
            position: "absolute",
            bottom: "-120px",
            right: "500px",
            width: 70,
            zIndex: 0,
          }}
        />

        {/* TEXT */}
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{ position: "relative", zIndex: 1 }}
        >
          Where <span style={{ color: "#ff3c3c" }}>Skills</span>
          <br />
          are Sharpened and
          <br />
          <span style={{ color: "#ff3c3c" }}>Code</span> Comes to Life
        </Typography>

        <Typography
          mt={2}
          color="text.secondary"
          sx={{ position: "relative", zIndex: 1 }}
        >
          Unlock your coding potential through interactive challenges,
          real-time feedback, and a supportive community.
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 3,
            borderRadius: 3,
            textTransform: "none",
            position: "relative",
            zIndex: 1,
          }}
          onClick={() => navigate("/signup")}
        >
          Get Started
        </Button>
      </Box>

      {/* RIGHT SIDE - IMAGE + VECTORS */}
      <Box sx={{ position: "relative", width: { xs: "100%", md: 450 }, height: 500 }}>
        
        {/* RIGHT TOP VECTOR */}
        <Box
          component="img"
          src="/Vector.png"
          alt="vector-top"
          sx={{
            position: "absolute",
            top: "-20px",
            right: "-80px",
            width: 70,
            zIndex: 3,
          }}
        />
        {/* MAIN IMAGE */}
        <Box
          component="img"
          src="/Right Side.png"
          alt="main-image"
          sx={{
            width: 450,
            position: "relative",
            zIndex: 2,
            display: "block",
            margin: "0 auto",
          }}
        />
      </Box>
    </Box>
  );
}

export default HeroSection;
