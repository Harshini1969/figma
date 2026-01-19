import {Box,Typography,TextField,MenuItem,Button,Table,TableBody,TableCell,
  TableContainer,TableHead,TableRow,Paper,} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Code() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("");

  useEffect(() => {
    const savedLang = localStorage.getItem("selectedLanguage");
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  function handleLanguageChange(e) {
    const value = e.target.value;
    setLanguage(value);
    localStorage.setItem("selectedLanguage", value);
  }

  return (
    <Box px={6} py={4}>
      {/* TITLE */}
      <Typography variant="h4" fontWeight={700} textAlign="center" mb={4}>
        <span style={{ color: "#e11d48" }}>Coding</span>{" "}
        <span style={{ color: "#3730a3" }}>Questions</span>
      </Typography>

      {/* FILTERS */}
      <Box display="flex" gap={2} mb={4} justifyContent="center">
        <TextField
          placeholder="Search ..."
          sx={{
            width: "55%",
            "& .MuiOutlinedInput-root": { borderRadius: "8px" },
          }}
          InputProps={{
            endAdornment: <SearchIcon color="action" />,
          }}
        />

        <TextField
          select
          value={language}
          onChange={handleLanguageChange}
          sx={{
            width: "25%",
            "& .MuiOutlinedInput-root": { borderRadius: "8px" },
          }}
          SelectProps={{ displayEmpty: true }}
        >
          <MenuItem value="">
            <em>Language ...</em>
          </MenuItem>
          <MenuItem value="Python">Python</MenuItem>
          <MenuItem value="Java">Java</MenuItem>
          <MenuItem value="C++">C++</MenuItem>
        </TextField>
      </Box>

      {/* TABLE WITH SCROLL */}
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          borderRadius: 2,
          maxHeight: "420px",         
          overflowY: "auto",

          /* HIDE SCROLLBAR */
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          scrollbarWidth: "none",
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow sx={{ bgcolor: "#2b2b2b", height: 90 }}>
              {["Question Summary", "Test Case Count", "Language", "Actions"].map(
                (head, i) => (
                  <TableCell
                    key={head}
                    sx={{
                      color: "white",
                      fontWeight: 700,
                      fontSize: "22px",
                      textAlign: "center",
                      borderRight: i !== 3 ? "2px solid #555" : "none",
                      bgcolor: "#2b2b2b",
                    }}
                  >
                    {head}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {[...Array(15)].map((_, id) => (
              <TableRow
                key={id}
                sx={{
                  bgcolor: "#f6f7fb",
                  height: 90,
                  "& td": {
                    borderBottom: "2px solid #888",
                    borderRight: "2px solid #888",
                    fontSize: "18px",
                  },
                  "& td:last-child": {
                    borderRight: "none",
                  },
                }}
              >
                <TableCell sx={{ lineHeight: 1.6 ,fontSize:700}}>
                  The Library`s Fine Calculator Story: Alice manages the <br/>local
                  library and wants a way to calculate...
                </TableCell>

                <TableCell align="center" sx={{ fontSize: "20px" }}>
                  3
                </TableCell>

                <TableCell align="center" sx={{ fontSize: "20px" }}>
                  Python
                </TableCell>

                <TableCell align="center">
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#d90f3c",
                      width: 110,
                      height: 90,
                      borderRadius: "20px",
                      fontSize: "18px",
                      fontWeight: 600,
                      display: "flex",
                      flexDirection: "column",  
                      justifyContent: "center",
                      gap: "4px",
                      "&:hover": {
                        bgcolor: "#d90f3c",
                        boxShadow: "none",
                      },
                    }}
                      onClick={() => navigate(`/coding/${id + 1}`)}
                    >
                     <Box
                          sx={{
                            position: "relative",
                            width: 30,
                            height: 30,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                          }}
                        >
                          <LightbulbOutlinedIcon
                            sx={{
                              fontSize: 30,
                              color: "#fffbea",
                            }}
                          />

                          <BoltRoundedIcon
                            sx={{
                              position: "absolute",
                              fontSize: 12,
                              color: "#facc15", 
                              top: "40%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                            }}
                          />
                        </Box>
                        solve
                    </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Code;
