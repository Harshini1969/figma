import { Box, Typography, Grid, Card } from "@mui/material";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";

const features = [
  {
    icon: <EmojiObjectsOutlinedIcon sx={{ color: "white" }} />,
    title: "Solution\nWalkthroughs",
    desc: "See multiple approaches to each coding \nchallenge.",
  },
  {
    icon: <AccessTimeOutlinedIcon sx={{ color: "white" }} />,
    title: "Real-Time\nFeedback",
    desc: "Get immediate feedback as you code,\nalong with hints.",
  },
  {
    icon: <MenuBookOutlinedIcon sx={{ color: "white" }} />,
    title: "Adaptive Learning Paths",
    desc: "Follow personalized learning paths \n that adapt to your skill level and goals.",
  },
];

function Features() {
  return (
    <Box px={{ xs: 2, md: 6 }} py={6}>
      <Typography
        textAlign="center"
        fontWeight={600}
        mb={5}
        variant="h5"
      >
        Feature Highlights
      </Typography>

      <Grid
        container
        spacing={3}
        justifyContent="center"
      >
        {features.map(function(item, i) {
          return (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card
                sx={{
                  border: "2px solid #e11d48",
                  borderRadius: 3,
                  height: 220,                
                  textAlign: "center",
                  px: 3,
                  py: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
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
                  }}
                >
                  {item.icon}
                </Box>

                {/* TITLE */}
                <Typography
                  fontWeight={600}
                  fontSize={18}
                  mb={2}
                  lineHeight={1.3}
                >
                  {item.title.split("\n").map(function(line, idx) {
                    return <Box key={idx}>{line}</Box>;
                  })}
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
          );
        })}
      </Grid>
    </Box>
  );
}

export default Features;
