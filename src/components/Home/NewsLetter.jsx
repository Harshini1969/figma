import { Box, Typography, TextField, Button } from "@mui/material";

function Newsletter() {
  return (
    <Box sx={{ bgcolor: "#4a4ed1", mx: 6, my: 6, p: 6, borderRadius: 4 }}>
     
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography variant="h5" fontWeight={700} color="white" mb={1}>
          Subscribe for our tips
        </Typography>
        <Typography variant="body2" color="white">
          Clearly communicate the benefits of subscribing, such as exclusive content.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          bgcolor: "white",
          borderRadius: "50px",
          p: "8px 12px",
          alignItems: "center",
        }}
      >
        <TextField
          placeholder="Enter your email address"
          variant="standard"
          fullWidth
          InputProps={{ disableUnderline: true }}
        />
        <Button
          variant="contained"
          sx={{
            ml: 2,
            bgcolor: "#e62136",
            color: "white",
            borderRadius: "50px",
            textTransform: "none",
            px: 3,
            "&:hover": { bgcolor: "#c2182b" },
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
}

export default Newsletter;
