import {Box,Typography,Card,CardContent,Button,Divider,Tabs,Tab,IconButton} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import SyncIcon from "@mui/icons-material/Sync";

function CodingQuestion() {
  return (
    <Box sx={{ backgroundColor: "#f4f6fb", minHeight: "100vh", pb: 4 }}>
      {/* Title */}
      <Typography
        variant="h4"
        align="center"
        sx={{ mt: 4, fontWeight: "bold", px: 2 }}
      >
        <span style={{ color: "red" }}>Coding</span>{" "}
        <span style={{ color: "#3f51b5" }}>Question</span>
      </Typography>

      {/* Question Section */}
      <Card
        sx={{
          maxWidth: { xs: "95%", md: "85%" },
          mx: "auto",
          mt: 4,
          borderRadius: 3,
          maxHeight: { xs: "none", md: "350px" },
          overflowY: { xs: "visible", md: "auto" },
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          px: { xs: 1, sm: 2 },
        }}
      >
        <CardContent sx={{ fontSize: "14px" }}>
          {/* Question content remains exactly the same */}
          <Typography fontWeight={900}>
            1. First And Last Position Of An Element In Sorted Array
          </Typography>

          <Typography sx={{ mt: 1, lineHeight: 1.9  }}>
            Problem Statement
          </Typography>

          <Typography variant="body2" sx={{mt:1,lineHeight:1.9}}>
            You Have Been Given A Sorted Array/List ARR Consisting Of 'N'
            Elements. You Are Also Given An Integer 'K'.
            <br />
            Now, Your Task Is To Find The First And Last Occurrence Of 'K' In ARR.
          </Typography>

          <Typography variant="body2" sx={{ mt: 1 , fontWeight:600, lineHeight:1.9}}>
            Note :
            <br />
          </Typography>

          <Typography sx={{ mt: 1, lineHeight: 1.9  }}>
             1. If 'K' Is Not Present In The Array, Then The First And The Last
            Occurrence Will Be -1.
            <br />
            2. ARR May Contain Duplicate Elements.
          </Typography>

          <Typography variant="body2" sx={{ mt: 1, lineHeight: 1.9  }}>
            For Example,
            <br />
            If ARR = [0, 1, 1, 5] And K = 1, Then The First And Last Occurrence Of 1
            Will Be [1, 2] (0 - Indexed)
          </Typography>

          <Typography sx={{ mt: 1, fontWeight: 600 , lineHeight:1.9 }}>
            Detailed Explanation (Input/Output Format, Notes, Images)
            <br />
          </Typography>
           
            <Typography sx={{ mt: 1, lineHeight: 1.9  }}>
              Keyboard_arrow_down
            </Typography>

          <Typography sx={{ mt: 1, fontWeight: 600 , lineHeight:1.9}}>
            Input Format
          </Typography>

          <Typography variant="body2" sx={{ mt: 1, lineHeight: 1.9  }}>
            The First Line Of Input Contains An Integer 'T' Which Denotes The
            Number Of Test Cases Or Queries To Be Run. Then The Test Cases
            <br />
            Follows:
            <br />
            The First Line Of Each Test Case Contains Two Single-Space Separated
            Integers 'N' And 'K', Respectively.
            <br />
            The Second Line Of Each Test Case Contains 'N' Single-Space Seperated
            Integers Denoting The Elements Of The Array/List ARR.
          </Typography>

          <Typography sx={{ mt: 1, fontWeight: 600 , lineHeight:1.9}}>
            Output Format :
          </Typography>

          <Typography variant="body2" sx={{ mt: 1, lineHeight: 1.9  }}>
            Return Two Single-Space Separated Integers Denoting The First And The
            Last Occurrence Of 'K' In ARR, Respectively.
          </Typography>

          <Typography variant="body2" sx={{ mt: 1, fontWeight: 600 , lineHeight:1.9}}>
            <strong>Note:</strong><br/>
          </Typography>
          <Typography sx={{ mt: 1, lineHeight: 1.9  }}>
              You Do Not Need To Print Anything; It Has
            Already Been Taken Care Of. Just Implement The Given Function.
          </Typography>

          <Typography sx={{ mt: 1, fontWeight: 600 , lineHeight:1.9}}>
            Constraints:
          </Typography>

          <Typography variant="body2" sx={{ mt: 1, lineHeight: 1.5 }}>
            1 ≤ T ≤ 100
            <br />
            1 ≤ N ≤ 5000
            <br />
            0 ≤ K ≤ 10^5
            <br />
            0 ≤ ARR[I] ≤ 10^5
          </Typography>

          <Typography variant="body2" sx={{ whiteSpace: "pre-line" , lineHeight:1.2}}>
            Time Limit : 1 Second
          </Typography>

          <Typography sx={{ mt: 1, fontWeight: 600 , lineHeight:1.9}}>
            Sample Input 1:
          </Typography>

          <Typography variant="body2" sx={{ whiteSpace: "pre-line" , lineHeight:1.5}}>
              {`2
              6 3
              0 5 5 6 6 6
              8 2
              0 0 1 1 2 2 2 2`}
          </Typography>

          <Typography sx={{ mt: 1, fontWeight: 600,lineHeight:1.5 }}>
            Sample Output 1:
          </Typography>

          <Typography variant="body2" sx={{ whiteSpace: "pre-line",lineHeight:1.5  }}>
            {`-1 -1
            4 7`}
          </Typography>

          <Typography sx={{ mt: 1, fontWeight: 600 ,lineHeight:1.9}}>
            Explanation Of Sample Output 1:
          </Typography>

          <Typography variant="body2" sx={{ mt: 1 ,lineHeight:1.9}}>
            For The First Test Case, 3 Is Not Present In The Array. Hence The
            First And Last Occurrence Of 3 Is -1 And -1.
            <br />
            For The Second Test Case, The First Occurrence Of 2 Is At Index 4
            And Last Occurrence Is At Index 7.
          </Typography>

          <Typography sx={{ mt: 1, fontWeight: 600, lineHeight:1.9 }}>
            Sample Input 2:
          </Typography>

          <Typography variant="body2" sx={{ whiteSpace: "pre-line" , lineHeight:1.9}}>
          {`2
            4 0
            0 0 0 0
            1 2
            2`}
          </Typography>

          <Typography sx={{ mt: 1, fontWeight: 600, lineHeight:1.9 }}>
            Sample Output 2:
          </Typography>

          <Typography variant="body2" sx={{ whiteSpace: "pre-line",lineHeight:1.9 }}>
            {`0 3
            0 0`}
          </Typography>
        </CardContent>
      </Card>

      {/* Editor */}
      <Card sx={{ maxWidth: { xs: "95%", md: "85%" }, mx: "auto", mt: 4 }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: { xs: "wrap", md: "nowrap" },
              gap: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
              <Tabs value={0} TabIndicatorProps={{ style: { display: "none" } }}>
                <Tab label="Python" />
              </Tabs>
              <IconButton size="medium" sx={{ ml: { xs: 0, md: 2 } }}>
                <SyncIcon fontSize="medium" />
              </IconButton>
            </Box>

            <Box>
              <IconButton>
                <SettingsIcon />
              </IconButton>
              <IconButton>
                <FullscreenIcon />
              </IconButton>
            </Box>
          </Box>

          <Divider sx={{ my: 1 }} />

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              height: { xs: "auto", md: "360px" },
              borderRadius: 2,
              overflow: "hidden",
              gap: 2,
            }}
          >
            {/* CODE EDITOR */}
            <Box
              sx={{
                flex: 3,
                display: "flex",
                backgroundColor: "#2b2b2b",
                color: "#fff",
                fontFamily: "monospace",
                fontSize: "14px",
                minHeight: { xs: "200px", md: "auto" },
              }}
            >
              {/* Line Numbers */}
              <Box
                sx={{
                  backgroundColor: "#f4f6fb",
                  color: "#666",
                  px: 2,
                  py: 2,
                  textAlign: "right",
                  userSelect: "none",
                  lineHeight: "26px",
                  display: { xs: "none", md: "block" },
                }}
              >
                1<br />
                2<br />
                3<br />
                4<br />
                5
              </Box>

              {/* Code */}
              <Box
                sx={{
                  px: 3,
                  py: 2,
                  lineHeight: "26px",
                  whiteSpace: "pre",
                  width: "100%",
                  overflowX: "auto",
                }}
              >
{`#include <Bits/StdC++.H>

Pair<Int, Int> FirstAndLastPosition(Vector<Int>& Arr, Int N, Int K)
{
    // Write Your Code Here
}`}
              </Box>
            </Box>

            {/* CONSOLE */}
            <Box
              sx={{
                flex: 1.2,
                backgroundColor: "#f7f8fc",
                borderLeft: { xs: "none", md: "1px solid #ddd" },
                borderTop: { xs: "1px solid #ddd", md: "none" },
                p: 2,
                minHeight: { xs: "150px", md: "auto" },
              }}
            >
              <Typography fontWeight={600} sx={{ mb: 2 }}>
                Console
              </Typography>

              {/* Tabs */}
              <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
                <Typography>Sample</Typography>
                <Typography color="text.secondary">Custom</Typography>
              </Box>

              {/* Input Area */}
              <Box
                sx={{
                  backgroundColor: "white",
                  border: "1px solid #ddd",
                  borderRadius: 1,
                  p: 2,
                  height: { xs: "100px", md: "260px" },
                  fontSize: "14px",
                  color: "#777",
                }}
              >
                Write Your Input Cases Here Like
                <br />
                1234
              </Box>
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
          flexWrap: "wrap",
        }}
      >
        <Button
          variant="contained"
          sx={{ backgroundColor: "#e53935", minWidth: { xs: "45%", sm: "120px" } }}
        >
          Run
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#3f51b5", minWidth: { xs: "45%", sm: "120px" } }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default CodingQuestion;
