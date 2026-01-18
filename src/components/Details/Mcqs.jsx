import React, { useState } from "react";
import {Box,Typography,Card,CardContent,Radio,RadioGroup,FormControlLabel,Button,} from "@mui/material";

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
              <Typography variant="body1" sx={{ mb: 3 }}>
                <strong>{q.id}.</strong> Eesha Works For ISRO Where She Is Involved
                In A Mission To Intercept A Comet That Is Likely To Collide
                Within 1 Month. She Is Developing A C Program To Calculate The
                Trajectory Of The Missile To Be Launched To Intercept And
                Destroy The Approaching Comet. In Order To Achieve Highest
                Accuracy Of The Missile Trajectory What Data Type Should She
                Use For The Variables In Her Equation?
              </Typography>

                   {/* Radio buttons */}
              <RadioGroup
                value={selected[q.id] || ""}
                row
                sx={{
                  flexWrap: "wrap",
                  gap: "24px",
                }}
              >
                <FormControlLabel
                  value="opt1"
                  control={
                    <Radio
                      checked={selected[q.id] === "opt1"}
                      onClick={() => handleClick(q.id, "opt1")}
                    />
                  }
                  label="Double"
                  sx={{ width: "45%" }}
                />

                <FormControlLabel
                  value="opt2"
                  control={
                    <Radio
                      checked={selected[q.id] === "opt2"}
                      onClick={() => handleClick(q.id, "opt2")}
                    />
                  }
                  label="Long Double"
                  sx={{ width: "45%" }}
                />

                <FormControlLabel
                  value="opt3"
                  control={
                    <Radio
                      checked={selected[q.id] === "opt3"}
                      onClick={() => handleClick(q.id, "opt3")}
                    />
                  }
                  label="Float"
                  sx={{ width: "45%" }}
                />

                <FormControlLabel
                  value="opt4"
                  control={
                    <Radio
                      checked={selected[q.id] === "opt4"}
                      onClick={() => handleClick(q.id, "opt4")}
                    />
                  }
                  label="All Of These"
                  sx={{ width: "45%" }}
                />
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
