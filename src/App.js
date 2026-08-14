import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import { Toaster } from "react-hot-toast";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background:
    linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );

  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const [openModal, setOpenModal] = useState({
    state: false,
    project: null,
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        {/* Global Toast */}
        <Toaster
          position="top-center"
          reverseOrder={false}
          containerStyle={{
            zIndex: 999999,
          }}
          toastOptions={{
            duration: 4000,

            style: {
              background: darkMode ? "#171721" : "#ffffff",
              color: darkMode ? "#ffffff" : "#111827",
              border: darkMode
                ? "1px solid rgba(255,255,255,0.12)"
                : "1px solid rgba(0,0,0,0.08)",
              borderRadius: "12px",
              padding: "14px 18px",
              fontSize: "15px",
              fontWeight: "500",
              boxShadow: "0 10px 35px rgba(0,0,0,0.20)",
            },

            success: {
              duration: 4000,
            },

            error: {
              duration: 5000,
            },
          }}
        />

        <Navbar />

        <Body>
          <HeroSection />

          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>

          <Education />

          <Wrapper>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />

            <Contact />
          </Wrapper>

          <Footer />

          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
