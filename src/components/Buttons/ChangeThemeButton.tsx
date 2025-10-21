import { useState } from "react"
import { useCookies } from "react-cookie"
import themes from "../../styles/themes.json"
import "./ThemeSelector.scss"

const ChangeThemeButton = () => {
    const [cookies, setCookie] = useCookies(undefined);
    const currentTheme = cookies["Theme"] || "modern-palette";
    const [showPalettes, setShowPalettes] = useState(false);

  const setTheme = (themeID: string) => {
    setCookie("Theme", themeID);
    document.body.className = themeID;
    console.log("theme", themeID);
  };

  const toggleShowPalettes = () => {
    setShowPalettes(!showPalettes)
    console.log("showPalettes", showPalettes);
  };

  console.log("currentTheme", currentTheme);
  console.log("showPalettes", showPalettes);

  return (
    <div className={`theme-selector ${showPalettes ? "show-themes" : ""}`}>
      <i
        className="fas fa-palette theme-selector-icon"
        onClick={toggleShowPalettes}
      ></i>

      {showPalettes && (
        <div className="theme-grid">
          {themes.map((theme: { id: string; primaryColor: string; secondaryColor: string }) => (
            <div
              key={theme.id}
              className="theme-swatch"
              style={{
                backgroundColor: theme.primaryColor,
                boxShadow: `0 0 0 1px ${theme.secondaryColor}`,
              }}
              onClick={() => setTheme(theme.id)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChangeThemeButton;
