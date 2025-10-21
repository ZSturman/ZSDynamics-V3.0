import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie"

import HomePage from "./components/Pages/HomePage/HomePage";
import AboutPage from "./components/Pages/AboutPage/AboutPage";
import ProjectsPage from "./components/Pages/ProjectsPage/ProjectsPage";
import ContactPage from "./components/Pages/ContactPage/ContactPage";
import Sidebar from "./components/Sidebar/Sidebar";

import TestingPage from "./tests/design/TestingPage";
import "./styles/app.scss";
import "./styles/themes.scss";
import "./components/Buttons/Buttons.scss"

const App = () => {
  const [cookies, setCookie] = useCookies(["Theme"]);

  useEffect(() => {
    if (!cookies.Theme) {
      setCookie("Theme", "modern-palette", { path: "/" });
    } else {
      document.body.className = cookies.Theme;
    }
  })

  console.log("cookies.Theme: ", cookies.Theme);



  return (
    <>
      <Router basename="/ZSDynamics-V3.0">
        <div className="app-container">
          <div className="sidebar-container">
            <Sidebar />
          </div>
          <div className="content-container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/testingpage" element={<TestingPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
