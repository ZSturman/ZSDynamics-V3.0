import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/Pages/HomePage/HomePage";
import AboutPage from "./components/Pages/AboutPage/AboutPage";
import ProjectsPage from "./components/Pages/ProjectsPage/ProjectsPage";
import ContactPage from "./components/Pages/ContactPage/ContactPage"
import ChangeThemeButton from "./components/Buttons/ChangeThemeButton";


import TestingPage from "./tests/design/TestingPage";
import "./styles/app.css";

const App = () => {
  const [theme, setTheme] = useState("");
  const [showThemes, setShowThemes] = useState(false);

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
    setShowThemes(false);
  };

  return (
    <>
      <Router>
        <div className={`main-container ${theme}`}>
          <Navbar />
          <ChangeThemeButton 
            changeTheme={changeTheme} 
            showThemes={showThemes} 
            setShowThemes={setShowThemes} 
          />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/testingpage" element={<TestingPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
