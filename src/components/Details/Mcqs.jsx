import React, { useState } from "react";
import {Box,Typography,Card,CardContent,Radio,RadioGroup,FormControlLabel,Button,Grid} from "@mui/material";

const questions = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
];

function MCQPage() {
  const [selected, setSelected] = useState({});

  function handleClick(qid, value) {
    setSelected((prev) => ({
      ...prev,
      [qid]: prev[qid] === value ? "" : value,
    }));
  }

  return (
    <Box sx={{ backgroundColor: "#f4f6fb", minHeight: "100vh", pb: 5 }}>
      {/* Title */}
      <Typography
        variant="h4"
        align="center"
        sx={{ mt: 4, fontWeight: "bold" }}
      >
        <span style={{ color: "red" }}>MCQ</span>{" "}
        <span style={{ color: "#3f51b5" }}>Questions</span>
      </Typography>

      {/* Questions */}
      <Box sx={{ mt: 4 }}>
        {questions.map((q) => (
          <Card
            key={q.id}
            sx={{
              maxWidth: "85%",
              mx: "auto",
              mb: 3,
              borderRadius: 3,
              backgroundColor: "#f9faff",
            }}
          >
            <CardContent>
              <Typography variant="body1" sx={{ mb: 2 }}>
                <strong>{q.id}.</strong> Eesha Works For ISRO Where She Is Involved
                In A Mission To Intercept A Comet That Is Likely To Collide
                Within 1 Month. She Is Developing A C Program To Calculate The
                Trajectory Of The Missile To Be Launched To Intercept And
                Destroy The Approaching Comet. In Order To Achieve Highest
                Accuracy Of The Missile Trajectory What Data Type Should She
                Use For The Variables In Her Equation?
              </Typography>

              <RadioGroup value={selected[q.id] || ""}>
                <Grid container>
                  <Grid item xs={6}>
                    <FormControlLabel
                      value="double1"
                      control={
                        <Radio
                          onClick={() => handleClick(q.id, "double1")}
                        />
                      }
                      label="Double"
                    />
                    <FormControlLabel
                      value="double2"
                      control={
                        <Radio
                          onClick={() => handleClick(q.id, "double2")}
                        />
                      }
                      label="Double"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel
                      value="double3"
                      control={
                        <Radio
                          onClick={() => handleClick(q.id, "double3")}
                        />
                      }
                      label="Double"
                    />
                    <FormControlLabel
                      value="double4"
                      control={
                        <Radio
                          onClick={() => handleClick(q.id, "double4")}
                        />
                      }
                      label="Double"
                    />
                  </Grid>
                </Grid>
              </RadioGroup>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Submit Button */}
      <Box textAlign="center" mt={4}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#3f3d99",
            px: 5,
            py: 1.2,
            borderRadius: 2,
            textTransform: "none",
            fontSize: "16px",
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default MCQPage;
