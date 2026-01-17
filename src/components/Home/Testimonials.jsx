import {Box,Typography,Card,CardContent,Avatar,Chip,} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";

            /* ========= SINGLE CARD ========== */
function TestimonialCard(props) {
  const offset = props.offset || 0;

  return (
    <Box
      sx={{
        position: "relative",
        transform: `translateY(${offset}px)`,
      }}
    >
      <Card
        sx={{
          width: 360,
          borderRadius: 2,
          boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
          bgcolor: "white",
        }}
      >
                {/* RED HEADER */}
        <Box
          sx={{
            bgcolor: "#e11d48",
            color: "white",
            px: 2,
            py: 1.5,
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Avatar src="/student.png" sx={{ width: 42, height: 42 }} />

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
              {[1, 2, 3, 4, 5].map(function(i) {
                return <StarIcon key={i} sx={{ fontSize: 14 }} />;
              })}
            </Box>

            <Chip
              label="Testimonial"
              size="small"
              sx={{
                bgcolor: "#ef4444",
                color: "white",
                fontSize: 10,
                mt: 0.5,
                height: 18,
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
      </Card>

                   {/* QUOTES  */}
      <Box
        sx={{
          position: "absolute",
          bottom: -34,
          left: 24,
          transform: "rotate(180deg)",
          display: "flex",
          zIndex: 2,
        }}
      >
        <FormatQuoteRoundedIcon
          sx={{
            fontSize: 70,
            color: "#000",
          }}
        />
      </Box>
    </Box>
  );
}

            /* ===== MAIN SECTION ======= */
function Testimonials() {
  return (
    <Box
      sx={{
        position: "relative",
        py: 12,
        overflow: "hidden",
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
          height: "100%",
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

                 {/* CARDS*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 5,
          flexWrap: "wrap",
        }}
      >
        <TestimonialCard offset={-20} />
        <TestimonialCard offset={20} />
        <TestimonialCard offset={60} />
      </Box>
    </Box>
  );
}

export default Testimonials;
