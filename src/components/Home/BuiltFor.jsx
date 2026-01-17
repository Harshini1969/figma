import { Box, Typography, Grid, Card, Button } from "@mui/material";

function BuiltFor() {
  const BuiltForItems = [
    { img: "/Profession.png", title: "FOR PROFESSALS" },
    { img: "/Students.png", title: "FOR STUDENTS" },
  ];

  return (
    <Box py={8} px={4}>
      <Typography variant="h5" fontWeight={600} mb={4} textAlign="center">
        Built for Everyone
      </Typography>

      <Grid container spacing={4}>
        {BuiltForItems.map((item, idx) => (
          <Grid item xs={12} sm={6} key={idx}>
            <Card
              sx={{
                position: "relative",
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt="Built For"
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* OVERLAY + CENTERED CONTENT */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  color: "white",
                }}
              >
                <Typography variant="subtitle1" fontWeight={700} mb={2}>
                  {item.title}
                </Typography>

                <Button
                  sx={{
                    bgcolor: "#1976d2",
                    color: "white",
                    borderRadius: "20px",
                    px: 3,
                    py: "6px",
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "#1565c0",
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
