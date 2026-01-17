import React from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", px: 6 }}>
      {/* Left */}
      <Box sx={{ maxWidth: 400 }}>
        <Typography variant="h4" fontWeight={700}>
          Login to your account
        </Typography>

        <Typography color="text.secondary" mb={3}>
          its easy! just take a minute and provide the details
        </Typography>

        <TextField fullWidth label="Email or Phone" margin="normal" />
        <TextField fullWidth label="Password" type="password" margin="normal" />

        <Button fullWidth variant="contained" sx={{ mt: 2 }}>
          Login
        </Button>

        <Typography textAlign="center" mt={2}>
          Didn’t have an account?{" "}
          <Link
            component="button"
            color="error"
            onClick={() => navigate("/signup")}
          >
            Signup
          </Link>
        </Typography>
      </Box>

      {/* Right Image */}
      <Box sx={{ flex: 1, textAlign: "center" }}>
        <img src="/Right Side.png" width="350" alt="hero" />
      </Box>
    </Box>
  );
}

export default Login;
