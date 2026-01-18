import {Box,Typography,Card,CardContent,Button,Divider,Tabs,Tab,} from "@mui/material";

function CodingQuestion() {
  return (
    <Box sx={{ backgroundColor: "#f4f6fb", minHeight: "100vh", pb: 4 }}>
      {/* Title */}
      <Typography
        variant="h4"
        align="center"
        sx={{ mt: 4, fontWeight: "bold" }}
      >
        <span style={{ color: "red" }}>Coding</span>{" "}
        <span style={{ color: "#3f51b5" }}>Question</span>
      </Typography>

      {/* Question Section */}
      <Card
        sx={{
          maxWidth: "85%",
          mx: "auto",
          mt: 4,
          borderRadius: 3,
        }}
      >
        <CardContent>
          <Typography variant="h6" fontWeight="bold">
            1. First And Last Position Of An Element In Sorted Array
          </Typography>

          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            <strong>Problem Statement</strong>
          </Typography>

          <Typography variant="body2" sx={{ mt: 1 }}>
            You Have Been Given A Sorted Array/List ARR Consisting Of 'N'
            Elements. You Are Also Given An Integer 'K'.
            <br />
            Now, Your Task Is To Find The First And Last Occurrence Of 'K' In ARR.
          </Typography>

          <Typography variant="body2" sx={{ mt: 1 }}>
            <strong>Note:</strong>
            <br />
            1. If 'k' Is Not Present In The Array, Then The First And The Last
            Occurrence Will Be -1.
            <br />
            2. ARR May Contain Duplicate Elements.
          </Typography>

          <Typography variant="body2" sx={{ mt: 1 }}>
            <strong>Example:</strong>
            <br />
            If ARR = [0, 1, 1, 5] And K = 1, Then The First And Last Occurrence Of
            1 Will Be [1, 2] (0 - Indexed)
          </Typography>

          <Typography variant="subtitle2" sx={{ mt: 2, fontWeight: "bold" }}>
            Detailed Explanation (Input/Output Format, Notes, Images)
          </Typography>
        </CardContent>
      </Card>

            {/* Editor Section */}
      <Card
        sx={{
          maxWidth: "85%",
          mx: "auto",
          mt: 4,
          borderRadius: 3,
        }}
      >
        <CardContent>
          <Tabs value={0}>
            <Tab label="Python" />
          </Tabs>

          <Divider sx={{ mb: 2 }} />

          <Box sx={{ display: "flex", height: "320px" }}>
            {/* Code Editor */}
            <Box
              sx={{
                flex: 3,
                backgroundColor: "#1e1e1e",
                color: "#fff",
                p: 2,
                fontFamily: "monospace",
                fontSize: "14px",
                borderRadius: 2,
                mr: 2,
              }}
            >
              <pre style={{ margin: 0 }}> 
      {`#include <bits/stdc++.h>
      pair<int,int> FirstAndLastPosition(vector<int>& Arr, int N, int K)
      {
        // Write Your Code Here
      }`}
              </pre>
            </Box>

            {/* Console */}
            <Box
              sx={{
                flex: 1,
                backgroundColor: "#f9f9f9",
                border: "1px solid #ddd",
                borderRadius: 2,
                p: 2,
              }}
            >
              <Typography variant="subtitle2" fontWeight="bold">
                Console
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body2" color="text.secondary">
                Write Your Input Cases Here
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mt: 4,
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#e53935",
            px: 4,
            textTransform: "none",
          }}
        >
          Run
        </Button>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#3f51b5",
            px: 4,
            textTransform: "none",
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default CodingQuestion;
