import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login() {
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
          Login to your account
        </Typography>

        <Typography color="text.secondary" mb={1}>
          its easy! just take a minute and provide the details
        </Typography>

        <TextField
          fullWidth
          label="Email or Phone"
          margin="normal"
          InputProps={{
            sx: { height: 60 },
          }}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          InputProps={{
            sx: { height: 60 },
          }}
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
          Login
        </Button>

        <Typography textAlign="center" mt={4}>
          Didn`t have an account?{" "}
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

export default Login;
