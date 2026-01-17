import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Home/Navbar";
import Home from "./components/Home/Home";
import Code from "./components/Details/Code";
import Mcqs from "./components/Details/Mcqs";
import Login from "./components/Pages/Login";
import CodingQuestion from "./components/Details/CodeQuestion";
import SignUp from "./components/Pages/SignUp";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coding" element={<Code />} />
        <Route path="/coding/:id" element={<CodingQuestion/>} />
        <Route path="/mcqs" element={<Mcqs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
