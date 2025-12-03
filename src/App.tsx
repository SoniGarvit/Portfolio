import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./pages/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Box sx={{ minHeight: "77vh" }}>
              <Home />
            </Box>
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route
          path="/contact"
          element={
            <Box sx={{ minHeight: "70vh" }}>
              <Contact />
            </Box>
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
