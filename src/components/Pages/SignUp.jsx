import React from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" }, // stack on mobile
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 3, sm: 6 },
        py: { xs: 4, md: 0 },
        gap: { xs: 4, md: 0 },
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          width: { xs: "100%", md: 600 }, // full width on mobile
          pl: { xs: 0, md: 4 },
          textAlign: { xs: "center", md: "left" }, // center text on mobile
        }}
      >
        <Typography   variant="h4"
            fontWeight={700}
            mb={2}
            textAlign="center"
        >
          Create an account
        </Typography>

        <Typography 
            color="text.secondary"
            mb={1}
            textAlign="center" >
          It's easy! Just take a minute and provide the details
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

        <Typography textAlign={{ xs: "center", md: "left" }} mt={4}>
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
      <Box
        sx={{
          textAlign: "center",
          width: { xs: "100%", md: "auto" },
        }}
      >
        <img
          src="/Right Side.png"
          width="450"
          alt="hero"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  );
}

export default SignUp;
