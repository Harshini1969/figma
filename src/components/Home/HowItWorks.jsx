import { Box, Typography } from "@mui/material";

function HowItWorks() {
  const steps = [
    "Sign Up",
    "Code and Learn",
    "Understand",
    "Practice",
    "Achieve",
  ];

  return (
    <Box sx={{ display: "flex", minHeight: "600px" }}>
      {/* LEFT SECTION */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
          bgcolor: "#e6002b",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* BLUE SHAPE */}
        <Box
          sx={{
            position: "absolute",
            width: "520px",
            height: "100%",
            bgcolor: "#4a57c6",
            left: "-200px",
            top: 0,
            borderRadius: "0 50% 50% 0",
            zIndex: 1,
          }}
        />

        {/* RED SHAPE INSIDE BLUE */}
        <Box
          sx={{
            position: "absolute",
            width: "220px",
            height: "220px",
            bgcolor: "#e6002b",
            borderRadius: "50%",
            left: "-120px",
            bottom: "150px",
            zIndex: 2,
          }}
        />

        {/* IMAGE */}
        <Box
          component="img"
          src="/LadyImage.png"
          alt="Student"
          sx={{
            width: 500,
            position: "relative",
            left: 90,
            zIndex: 3,
          }}
        />
      </Box>

      {/* RIGHT SECTION */}
      <Box
        sx={{
          flex: 1,
          bgcolor: "#e6002b",
          px: 8,
          py: 10,
        }}
      >
        <Typography variant="h4" fontWeight={700} color="white" mb={1}>
          How It Works
        </Typography>

        <Typography color="white" mb={5}>
          Simplify the onboarding process by showing how easy it is to start
          using CodeArena.
        </Typography>

        {steps.map(function(step, index) {
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "white",
                borderRadius: 2,
                px: 3,
                py: 2,
                mb: 3,
                boxShadow: 3,
                width: "90%",
              }}
            >
              <Typography fontWeight={700} mr={2}>
                {`0${index + 1}`}
              </Typography>

              {/* Divider */}
              <Box
                sx={{
                  width: "1px",
                  height: "24px",
                  bgcolor: "#ddd",
                  mr: 2,
                }}
              />

              <Typography fontWeight={600}>{step}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default HowItWorks;
