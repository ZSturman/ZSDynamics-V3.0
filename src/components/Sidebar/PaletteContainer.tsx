import { useEffect } from "react";
import { useState } from "react"
import { useCookies } from "react-cookie"
import Palettes from "./Palettes"
import './Sidebar.scss'
import Themes from '../../styles/themes.json'

interface PaletteContainerProps {
  onTogglePalettes: () => void;
}

const PaletteContainer: React.FC<PaletteContainerProps> = ({ onTogglePalettes }) => {
  const [cookies, setCookie, removeCookie] = useCookies(undefined)

  useEffect(() => {
    if (!cookies.Theme) {
      setCookie("Theme", "modern-palette", { path: '/' });
    }
  }, []);

  const [themeOptions] = useState(Themes)

  useEffect(() => {
    if (!cookies.Theme) {
      const expires = new Date();
      expires.setDate(expires.getDate() + 7); 
      setCookie("Theme", "modern-palette", { path: '/', expires });
    }
  }, []);
  
  const handleThemeChange = (themeID: string) => {
    if (themeID !== cookies.Theme) {
      const expires = new Date()
      expires.setDate(expires.getDate() + 7)
      removeCookie("Theme", { path: '/' });
      setCookie("Theme", themeID, { path: '/', expires });
      document.body.className = themeID;
    }
    onTogglePalettes()
  };
  
  

  return (
      <Palettes onResult={handleThemeChange} themes={themeOptions} />
  );
};

export default PaletteContainer;




