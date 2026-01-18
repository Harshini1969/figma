import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation(); 

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Coding", path: "/coding" },
    { name: "MCQ'S", path: "/mcqs" },
  ];

  // Hide login/signup if path starts with /coding or /mcqs
  const hideAuthButtons =
    location.pathname.startsWith("/coding") || location.pathname.startsWith("/mcqs");

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ bgcolor: "white", color: "black", px: 4 }}
    >
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
            cursor: "pointer",
          }}
        >
          <img src="/logo 1.png" alt="" width="100" height="70" />
          <Typography fontWeight={900} fontSize={22} mt={-2.0}>
            <span style={{ color: "#4a5cff" }}>Code</span>
            <span style={{ color: "#ff3c3c" }}>Arena</span>
          </Typography>
        </Box>

        {/* NAV LINKS */}
        <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
          {navLinks.map((link) => (
            <Typography
              key={link.name}
              component={link.path !== "/about" ? Link : "span"}
              to={link.path !== "/about" ? link.path : undefined}
              sx={{
                textDecoration: "none",
                color: "black",
                fontWeight: 500,
                borderBottom:
                  location.pathname === link.path
                    ? "2px solid #ff3c3c"
                    : "none",
                "&:hover": { color: "#4a5cff" },
                paddingBottom: "2px",
                cursor: link.path !== "/about" ? "pointer" : "default",
              }}
            >
              {link.name}
            </Typography>
          ))}
        </Box>

        {/* ACTION BUTTONS */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            visibility: hideAuthButtons ? "hidden" : "visible", // keeps space
          }}
        >
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
