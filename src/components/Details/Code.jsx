import {Box,Typography,TextField,MenuItem,Button,Table,TableBody,TableCell,
  TableContainer,TableHead,TableRow,Paper,} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
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

  /* ---------- HANDLE CHANGE ---------- */
  function handleLanguageChange(e) {
    const value = e.target.value;
    setLanguage(value);
    localStorage.setItem("selectedLanguage", value);
  }

  return (
    <Box px={6} py={4}>
      {/* =========== TITLE ========= */}
      <Typography variant="h4" fontWeight={700} textAlign="center" mb={4}>
        <span style={{ color: "#e11d48" }}>Coding</span>{" "}
        <span style={{ color: "#3730a3" }}>Questions</span>
      </Typography>

      {/* ========== FILTERS ===========*/}
      <Box display="flex" gap={2} mb={4} justifyContent="center">
        {/* Search */}
        <TextField
          placeholder="Search ..."
          sx={{
            width: "55%",
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
            },
          }}
          InputProps={{
            endAdornment: <SearchIcon color="action" />,
          }}
        />

        {/* Language (PERSISTENT) */}
        <TextField
          select
          value={language}
          onChange={handleLanguageChange}
          sx={{
            width: "25%",
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
            },
          }}
          SelectProps={{
            displayEmpty: true,
          }}
        >
          <MenuItem value="">
            <em>Language ...</em>
          </MenuItem>
          <MenuItem value="Python">Python</MenuItem>
          <MenuItem value="Java">Java</MenuItem>
          <MenuItem value="C++">C++</MenuItem>
        </TextField>
      </Box>

      {/* =========== TABLE ========== */}
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ borderRadius: 2 }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#2f2f2f" }}>
              <TableCell sx={{ color: "white", fontWeight: 600 }}>
                Question Summary
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600 }}>
                Test Case Count
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600 }}>
                Language
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600 }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {[1, 2, 3, 4, 5, 6].map((id) => (
              <TableRow key={id}>
                <TableCell>
                  The Library`s Fine Calculator Story: Alice manages the local
                  library and wants a way to calculate...
                </TableCell>
                <TableCell align="center">3</TableCell>
                <TableCell>Python</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    startIcon={<LightbulbIcon />}
                    sx={{
                      bgcolor: "#e11d48",
                      borderRadius: 3,
                      textTransform: "none",
                    }}
                    onClick={() => navigate(`/coding/${id}`)}
                  >
                    Solve
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
