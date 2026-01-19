import { Box, Typography, Grid, Card, Button } from "@mui/material";
import { Link } from "react-router-dom";

function BuiltFor() {
  const BuiltForItems = [
    { img: "/Profession.png", title: "FOR PROFESSIONALS" },
    { img: "/Students.png", title: "FOR STUDENTS" },
  ];

  return (
    <Box
      py={8}
      px={{ xs: 2, md: 4 }}
      maxWidth="1200px"
      mx="auto"
      position="relative"
      overflow="hidden"  
    >
      {/* TOP LEFT VECTOR */}
      <Box
        component="img"
        src="/Vector.png"
        alt=""
        sx={{
          position: "absolute",
          bottom: "-40px",
          left: "-40px",
          width: 80,
          zIndex: 0,
        }}
      />

      {/* BOTTOM RIGHT VECTOR */}
      <Box
        component="img"
        src="/Vector.png"
        alt=""
        sx={{
          position: "absolute",
          top:"-40px",
          right: "-40px",
          width: 80,
          zIndex: 0,
        }}
      />

      {/* HEADING */}
      <Typography
        textAlign="center"
        fontWeight={800}
        fontSize={{ xs: 26, md: 34 }}
        mb={5}
        sx={{ position: "relative", zIndex: 1 }} 
      >
        <span style={{ color: "#e11d48" }}>Built for </span>
        <span style={{ color: "#3b82f6" }}>Everyone</span>
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ position: "relative", zIndex: 1 }}
      >
        {BuiltForItems.map((item, idx) => (
          <Grid item xs={12} sm={6} md={5} key={idx}>
            <Card
              sx={{
                position: "relative",
                borderRadius: 6,
                overflow: "hidden",
                height: 320,
                cursor: "pointer",
              }}
            >
              {/* IMAGE */}
              <Box
                component="img"
                src={item.img}
                alt={item.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* OVERLAY */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.55), rgba(0,0,0,0.25))",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  textAlign: "center",
                  px: 2,
                }}
              >
                <Typography
                  fontWeight={700}
                  fontSize={{ xs: 16, md: 18 }}
                  letterSpacing={1}
                  mb={2}
                >
                  {item.title}
                </Typography>

                <Button
                  component={Link}
                  to="/signup"
                  sx={{
                    height:"50px",
                    bgcolor: "#3b82f6",
                    color: "white",
                    borderRadius: "300px",
                    px: 4,
                    py: 1,
                    fontSize: 14,
                    fontWeight: 600,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "#eb2525",
                    },
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default BuiltFor;
