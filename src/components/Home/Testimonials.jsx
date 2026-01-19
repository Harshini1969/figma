import { Box, Typography, Card, CardContent, Chip } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

/* SINGLE TESTIMONIAL CARD */
function TestimonialCard() {
  return (
    <Card
      sx={{
        width: 360,
        borderRadius: 2,
        boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
        bgcolor: "white",
        position: "relative",
        overflow: "visible", 
      }}
    >
      {/* IMAGE — OUTSIDE CARD */}
      <img
        src="/student.png"
        alt=""
        style={{
          position: "absolute",
          top: -15,
          left: -20,
          width: 70,
          height: 70,
          objectFit: "cover",
          background: "white",
          boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
          zIndex: 5,
        }}
      />

      {/* HEADER */}
      <Box
        sx={{
          bgcolor: "#e11d48",
          color: "white",
          px: 2,
          pl: 8, 
          py: 1.0,
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <Box>
          <Typography fontWeight={600} fontSize={14}>
            Nutan Sai
          </Typography>
          <Typography fontSize={11} sx={{ opacity: 0.85 }}>
            Student
          </Typography>
        </Box>

        <Box ml="auto" textAlign="right">
          <Box display="flex" justifyContent="flex-end">
            {[1, 2, 3, 4, 5].map((i) => (
              <StarIcon
                key={i}
                sx={{ fontSize: 14, color: "gold" }}
              />
            ))}
          </Box>

          <Chip
            label="Testimonial"
            size="small"
            sx={{
              bgcolor: "#ef4444",
              color: "white",
              fontSize: 10,
              mt: 0.5,
              height: 10
            }}
          />
        </Box>
      </Box>

      {/* CONTENT */}
      <CardContent sx={{ px: 3, py: 3 }}>
        <Typography fontSize={14} color="#333">
          “Thanks to CodeArena, I went from barely understanding loops to solving
          advanced algorithm challenges. I can`t recommend it enough to fellow
          students!”
        </Typography>
      </CardContent>

      {/* QUOTE */}
      <Typography
        sx={{
          position: "absolute",
          bottom: -150,
          left: 15,
          fontSize: 200,
          fontWeight: 900,
          color: "#e11d48",
          fontFamily: "serif",
          lineHeight: 1,
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        “
      </Typography>
    </Card>
  );
}

/* ========= MAIN SECTION ========= */
function Testimonials() {
  return (
    <Box
      sx={{
        position: "relative",
        py: 12,
        overflow: "visible",
      }}
    >
      {/* BACKGROUND IMAGE */}
      <Box
        component="img"
        src="/Page BG.png"
        alt="background"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "105%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />

      {/* TITLE */}
      <Typography
        variant="h4"
        fontWeight={700}
        color="white"
        textAlign="center"
        mb={8}
      >
        What Our Students <br /> Say
      </Typography>

      {/* TESTIMONIAL CARDS */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 5,
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ transform: "translateY(-20px)" }}>
          <TestimonialCard />
        </Box>

        <Box sx={{ transform: "translateY(20px)" }}>
          <TestimonialCard />
        </Box>

        <Box sx={{ transform: "translateY(60px)" }}>
          <TestimonialCard />
        </Box>
      </Box>
    </Box>
  );
}

export default Testimonials;
