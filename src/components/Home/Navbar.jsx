import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about", disabled: true },
    { name: "Coding", path: "/coding" },
    { name: "MCQ'S", path: "/mcqs" },
  ];

  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: "white", color: "black", px: 4 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

        {/* LOGO */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img src="/logo 1.png" alt="CodeArena Logo" width="100" height="70" />
          <Typography fontWeight={900} fontSize={22} mt={-2}>
            <span style={{ color: "#4a5cff" }}>Code</span>
            <span style={{ color: "#ff3c3c" }}>Arena</span>
          </Typography>
        </Box>

        {/* NAV LINKS */}
        <Box sx={{ display: "flex", gap: 4 }}>
          {navLinks.map(({ name, path, disabled }) =>
            disabled ? (
              <Typography
                key={name}
                component="span"
                sx={{
                  fontWeight: 500,
                  cursor: "default",
                  color: "black",
                }}
              >
                {name}
              </Typography>
            ) : (
              <Typography
                key={name}
                component={NavLink}
                to={path}
                sx={{
                  textDecoration: "none",
                  fontWeight: 500,
                  color: "black",
                  paddingBottom: "2px",
                  "&.active": {
                    borderBottom: "2px solid #ff3c3c",
                  },
                  "&:hover": {
                    color: "#4a5cff",
                  },
                }}
              >
                {name}
              </Typography>
            )
          )}
        </Box>

        {/* AUTH BUTTONS */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={Link}
            to="/login"
            variant="outlined"
            sx={{
              borderRadius: 3,
              textTransform: "none",
              color: "#4a5cff",
              borderColor: "#4a5cff",
            }}
          >
            Login
          </Button>

          <Button
            component={Link}
            to="/signup"
            variant="contained"
            sx={{
              borderRadius: 3,
              textTransform: "none",
              bgcolor: "#4a5cff",
            }}
          >
            Signup
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
