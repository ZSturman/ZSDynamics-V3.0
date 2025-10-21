import { useState } from "react"
import SidebarLink from "./SidebarLink"
import SidebarReumeLink from "./SidebarResumeLink"
import SidebarPaintbucket from "./SidebarPaintbucket"
import PaletteContainer from "./PaletteContainer"
import resumePDF from "../../assets/documents/ZacharySturmanResume.pdf";
import "./Sidebar.scss"

const Sidebar = () => {
  const [showPalette, setShowPalette] = useState(false);

  const togglePalettes = () => {
    setShowPalette(!showPalette);
  };

  return (
    <>
      <div className="sidebar">
        <ul className="icons-list">
          <ul>
            <SidebarReumeLink label="Zachary Sturman Resume" to={resumePDF} />

          </ul>
          <ul className="icons nav-links">
            <SidebarLink label="Home" to="/" />
            <SidebarLink label="Projects" to="/projects" />
            <SidebarLink label="About" to="/about" />
            <SidebarLink label="Contact" to="/contact" />
          </ul>

          <ul className="icons external-links">
            <SidebarLink label="GitHub" to="https://github.com/ZSturman" />
            <SidebarLink label="LinkedIn" to="https://linkedin.com/in/zachary-sturman" />
            <SidebarLink label="TwitterX" to="https://twitter.com" />
            <SidebarLink label="Email" to="mailto:contact@zsdynamics.com" />
            <SidebarLink label="Phone" to="tel:+1-555-0123" />
          </ul>

          <ul className="icons recreational-links">
            <SidebarPaintbucket
              onTogglePalettes={togglePalettes}
              active={showPalette ? true : false}
            />
          </ul>
        </ul>

        <div className="palette-picker-container">
          {showPalette && (
            <PaletteContainer onTogglePalettes={togglePalettes} />
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
