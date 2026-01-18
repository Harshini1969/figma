import { Box, Typography, Grid, Card } from "@mui/material";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const features = [
  {
    id: "solutions",
    icon: <EmojiObjectsOutlinedIcon sx={{ color: "white" }} />,
    title: "Solution\nWalkthroughs",
    desc: "See multiple approaches to each coding\nchallenge.",
  },
  {
    id: "feedback",
    icon: <AccessTimeOutlinedIcon sx={{ color: "white" }} />,
    title: "Real-Time\nFeedback",
    desc: "Get immediate feedback as you code,\nalong with hints.",
  },
  {
    id: "learning",
    icon: <MenuBookIcon sx={{ color: "white" }} />,
    title: "Adaptive Learning Paths",
    desc:
      "Follow personalized learning paths\nthat adapt to your skill level and goals.",
  },
];

function Features() {
  return (
    <Box px={{ xs: 2, md: 6 }} py={6}>
      <Typography
        textAlign="center"
        fontWeight={800}
        fontSize={{ xs: 28, md: 36 }}
        mb={5}
      >
        
        {/* RIGHT BOTTOM VECTOR */}
        <Box
          component="img"
          src="/Vector.png"
          alt="vector-bottom"
          sx={{
            position: "absolute",
            bottom: "-150px",
            right: "150px",
            width: 70,
            zIndex: 3,
          }}
        />
        <span style={{ color: "#e11d48" }}>Feature </span>
        <span style={{ color: "#3b82f6" }}>Highlights</span>
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {features.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card
              sx={{
                border: "2px solid #e11d48",
                borderRadius: 3,
                minHeight: 220,
                textAlign: "center",
                px: 3,
                py: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

                "&:hover": {
                  borderColor: "#042e71",
                },
              }}
            >
              {/* ICON */}
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  bgcolor: "#e11d48",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,

                  ".MuiCard-root:hover &": {
                    bgcolor: "#042e71",
                  },
                }}
              >
                {item.icon}
              </Box>

              {/* TITLE */}
              <Typography
                component="div"
                fontWeight={600}
                fontSize={18}
                mb={2}
                lineHeight={1.3}
              >
                {item.title.split("\n").map((line, idx) => (
                  <Box key={idx}>{line}</Box>
                ))}
              </Typography>

              {/* DESCRIPTION */}
              <Typography
                fontSize={14}
                color="text.secondary"
                lineHeight={1.6}
                sx={{ whiteSpace: "pre-line" }}
              >
                {item.desc}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Features;
