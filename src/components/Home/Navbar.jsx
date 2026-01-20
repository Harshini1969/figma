import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link, NavLink, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about", disabled: true },
    { name: "Coding", path: "/coding" },
    { name: "MCQ'S", path: "/mcqs" },
  ];

  const hideAuthButtons =
    location.pathname.startsWith("/coding") ||
    location.pathname.startsWith("/mcqs");

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: "white", color: "black", px: 2 }}>
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

        {/* Desktop Links */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 4,
            alignItems: "center",
          }}
        >
          {navLinks.map(({ name, path, disabled }) =>
            disabled ? (
              <Typography
                key={name}
                component="span"
                sx={{ fontWeight: 700, cursor: "default", color: "black" }}
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
                  fontWeight: 700,
                  color: "black",
                  paddingBottom: "2px",
                  "&.active": { borderBottom: "2px solid #ff3c3c" },
                  "&:hover": { color: "#4a5cff" },
                }}
              >
                {name}
              </Typography>
            )
          )}

          {!hideAuthButtons ? (
            <>
              <Button
                component={Link}
                to="/signup"
                variant="outlined"
                sx={{
                  width: "100px",
                  height: "60px",
                  borderRadius: "12px",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#3f3d8f",
                  border: "1px solid #3f3d8f",
                  bgcolor: "white",
                  "&:hover": { bgcolor: "red" },
                  ml: 2,
                }}
              >
                Signup
              </Button>

              <Button
                component={Link}
                to="/login"
                variant="contained"
                sx={{
                  width: "100px",
                  height: "60px",
                  borderRadius: "12px",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: 600,
                  bgcolor: "#3f3d8f",
                  "&:hover": { bgcolor: "red" },
                  ml: 1,
                }}
              >
                Login
              </Button>
            </>
          ) : (
            <Box sx={{ width: 208, height: 50 }} />
            /* 208px = 100 + 100 + margins */
          )}
        </Box>

        {/* Mobile Hamburger */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton onClick={toggleDrawer(true)} color="inherit">
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Mobile Drawer */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250, p: 2 }}
            role="presentation"
            onClick={toggleDrawer(false)}
          >
            <List>
              {navLinks.map(({ name, path, disabled }) =>
                disabled ? (
                  <ListItem key={name}>
                    <ListItemText primary={name} />
                  </ListItem>
                ) : (
                  <ListItem button key={name} component={Link} to={path}>
                    <ListItemText primary={name} />
                  </ListItem>
                )
              )}

              {!hideAuthButtons && (
                <>
                  <ListItem button component={Link} to="/signup">
                    <ListItemText primary="Signup" />
                  </ListItem>
                  <ListItem button component={Link} to="/login">
                    <ListItemText primary="Login" />
                  </ListItem>
                </>
              )}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
