import { Box, Typography, TextField, Button } from "@mui/material";

function Newsletter() {
  return (
    <Box sx={{ position: "relative" }}>
      
      {/* Top-left vector */}
      <Box
        component="img"
        src="/Vector.png"
        alt="vector"
        sx={{
          position: "absolute",
          top: -30,
          left: 50,
          width: 70,
        }}
      />

      {/* Main card */}
      <Box
        sx={{
          bgcolor: "#4a4ed1",
          mx: 6,
          my: 6,
          px: 6,
          py: 5,
          borderRadius: 4,
          position: "relative",
        }}
      >
        {/* Text */}
        <Box sx={{ textAlign: "center", mb: 4.5 }}>
         <Typography fontWeight={900} color="white" sx={{ fontSize: "28px" }}>
            Subscribe for our tips
          </Typography>

          <Typography variant="body2" color="white" sx={{ mt: 0.2 }}>
             Clearly communicate the benefits of subscribing,<br />
              such as exclusive content.
          </Typography>
        </Box>

        {/* Centered input + button */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "white",
              height: 60,
              width: 500,
              borderRadius: "20px",
              px: 1.5,
            }}
          >
            <TextField
              variant="standard"
              placeholder="Enter your email address"
              fullWidth
              InputProps={{
                disableUnderline: true,
                sx: { fontSize: "14px", px: 1 },
              }}
            />

            <Button
              variant="contained"
              sx={{
                height: 30,
                minWidth: 50,
                ml: 1,
                bgcolor: "#e62136",
                borderRadius: "20px",
                textTransform: "none",
                fontSize: "13px",
                "&:hover": { bgcolor: "#c2182b" },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Newsletter;
