import React from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 6,
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          width: 600, 
          pl: 4,      
        }}
      >
        <Typography variant="h4" fontWeight={700} mb={2}>
          Create an account
        </Typography>

        <Typography color="text.secondary" mb={1}>
          its easy! just take a minute and provide the details
        </Typography>

        <TextField
          fullWidth
          label="Email or Phone"
          margin="normal"
          InputProps={{ sx: { height: 60 } }}
        />

        <TextField
          fullWidth
          label="Full Name"
          margin="normal"
          InputProps={{ sx: { height: 60 } }}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          InputProps={{ sx: { height: 60 } }}
        />

        <TextField
          fullWidth
          label="Confirm Password"
          type="password"
          margin="normal"
          InputProps={{ sx: { height: 60 } }}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            height: 52,
            borderRadius: "12px",
          }}
        >
          Signup
        </Button>

        <Typography textAlign="center" mt={4}>
          Already have an account?{" "}
          <Link
            component="button"
            color="error"
            onClick={() => navigate("/login")}
          >
            Login
          </Link>
        </Typography>
      </Box>

      {/* Right Image */}
      <Box sx={{ textAlign: "center" }}>
        <img
          src="/Right Side.png"
          width="450"
          alt="hero"
          style={{ maxWidth: "100%" }}
        />
      </Box>
    </Box>
  );
}

export default SignUp;
