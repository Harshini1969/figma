import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <Box sx={{ bgcolor: "#0b0f3c", color: "white", py: 4 }}>
      <Container maxWidth="lg">
        {/* TOP ROW */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            alignItems: "center",
          }}
        >
          {/* LOGO */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img src="/logo 1.png" alt="logo" height={36} />
            <Typography fontWeight={700} fontSize={20}>
              <span style={{ color: "#4a5cff" }}>Code</span>
              <span style={{ color: "#ff3c3c" }}>Arena</span>
            </Typography>
          </Box>

          {/* NAV LINKS */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 4,
            }}
          >
            {["Home", "About Us", "Prepare", "Dashboard"].map(function(item) {
              return (
                <Typography
                  key={item}
                  sx={{
                    fontSize: 14,
                    cursor: "pointer",
                    "&:hover": { color: "#4a5cff" },
                  }}
                >
                  {item}
                </Typography>
              );
            })}
          </Box>

          {/* SOCIAL ICONS */}
          <Box>
            <IconButton sx={{ color: "white" }}>
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <TwitterIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <InstagramIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <YouTubeIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* DIVIDER */}
        <Divider sx={{ my: 2, bgcolor: "rgba(255,255,255,0.25)" }} />

        {/* BOTTOM ROW */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: 3 }}>
            {["Privacy Policy", "Terms of Use", "Legal"].map(function(item) {
              return (
                <Typography
                  key={item}
                  sx={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.7)",
                    cursor: "pointer",
                  }}
                >
                  {item}
                </Typography>
              );
            })}
          </Box>

          <Typography fontSize={13} color="rgba(255,255,255,0.7)">
            © 2024 Codegnan Destination. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
