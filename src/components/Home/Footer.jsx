import { Box, Container, Typography, IconButton, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <Box sx={{ py: 6, position: "relative" }}>
      <Container maxWidth="lg" sx={{ position: "relative" }}>

        {/* Top-left vector */}
        <Box
          component="img"
          src="/Vector.png"
          alt="vector"
          sx={{
            position: "absolute",
            bottom: 30,
            left: -70,
            width: 70,
            zIndex: 0,
            "@media (max-width: 600px)": {
              width: 50,
              left: -40,
              bottom: 10,
            },
          }}
        />

        {/* Bottom-right vector */}
        <Box
          component="img"
          src="/Vector.png"
          alt="vector"
          sx={{
            position: "absolute",
            top: -70,
            right: -20,
            width: 60,
            transform: "rotate(180deg)",
            zIndex: 0,
            "@media (max-width: 600px)": {
              width: 40,
              top: -40,
              right: -10,
            },
          }}
        />

        {/* FOOTER BOX */}
        <Box
          sx={{
            bgcolor: "#0b0f3c",
            color: "white",
            borderRadius: 4,
            px: { xs: 2, sm: 5 },
            py: { xs: 3, sm: 4 },
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* MAIN ROW */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 3, md: 6 },
            }}
          >

            {/* LEFT COLUMN */}
            <Box sx={{ minWidth: 200, textAlign: { xs: "center", md: "left" } }}>
              <img src="/logo 1.png" alt="logo" width={90} />
              <Typography fontWeight={900} fontSize={22} mt={-3}>
                <span style={{ color: "#4a5cff" }}>Code</span>
                <span style={{ color: "#ff3c3c" }}>Arena</span>
              </Typography>
            </Box>

            {/* RIGHT COLUMN */}
            <Box sx={{ flexGrow: 1 }}>
              {/* TOP ROW */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  alignItems: { xs: "center", sm: "flex-start" },
                  gap: { xs: 2, sm: 0 },
                }}
              >
                {/* NAV */}
                <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: { xs: "center", sm: "flex-start" } }}>
                  {["Home", "About Us", "Prepare", "Dashboard"].map((item) => (
                    <Typography
                      key={item}
                      sx={{
                        fontSize: 15,
                        cursor: "pointer",
                        "&:hover": { color: "#4a5cff" },
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>

                {/* SOCIAL ICONS */}
                <Box sx={{ display: "flex", gap: 1.5, mt: { xs: 1, sm: 0 } }}>
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
              <Divider sx={{ my: 2.5, bgcolor: "rgba(255,255,255,0.25)" }} />

              {/* BOTTOM ROW */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  alignItems: { xs: "center", sm: "flex-start" },
                  gap: { xs: 1.5, sm: 0 },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: { xs: "center", sm: "flex-start" } }}>
                  {["Privacy Policy", "Terms of Use", "Legal"].map((item) => (
                    <Typography
                      key={item}
                      sx={{
                        fontSize: 13,
                        color: "white",
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>

                <Typography fontSize={13} color="white">
                  © 2024 Codegnan Destination. All rights reserved.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
