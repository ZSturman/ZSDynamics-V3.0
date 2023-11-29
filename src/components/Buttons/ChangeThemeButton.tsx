import { useState } from 'react';

interface ChangeThemeButtonProps {
  changeTheme: (newTheme: string) => void;
  showThemes: boolean;
  setShowThemes: (show: boolean) => void;
}

const ChangeThemeButton: React.FC<ChangeThemeButtonProps> = ({
  changeTheme,
  showThemes,
  setShowThemes,
}) => {
    const themes = [
        { id: "modern-palette", name: "Modern & Clean", primaryColor: "#add8e6", secondaryColor: "#000000" },
        { id: "warm-palette", name: "Warm & Cozy", primaryColor: "#ffd700", secondaryColor: "#000000" },
        { id: "cool-palette", name: "Professional & Sophisticated", primaryColor: "#008080", secondaryColor: "#000000" },
        { id: "minimalist-palette", name: "Minimalist & Artistic", primaryColor: "#cc5500", secondaryColor: "#000000" },
        { id: "vibrant-palette", name: "Vibrant & Energetic", primaryColor: "#ffff00", secondaryColor: "#000000" },
        { id: "elegant-palette", name: "Elegant and refined", primaryColor: "#bd9b7a", secondaryColor: "#000000" },
        { id: "rustic-palette", name: "Rustic and grounded", primaryColor: "#967151", secondaryColor: "#000000" },
        { id: "fresh-palette", name: "Fresh and invigorating", primaryColor: "#90ee90", secondaryColor: "#000000" },
        { id: "nautical-palette", name: "Clear and maritime", primaryColor: "#add8e6", secondaryColor: "#000000" },
        { id: "retro-palette", name: "Nostalgic and retro", primaryColor: "#cd853f", secondaryColor: "#000000" },
      ];

  const toggleThemes = () => {
    setShowThemes(!showThemes);
  };

  const handleThemeChange = (themeId: string) => {
    document.body.className = themeId;
    changeTheme(themeId);
  };

  return (
    <div className={`theme-selector ${showThemes ? 'show-themes' : ''}`}>
      <i
        className="fas fa-palette theme-selector-icon"
        onClick={toggleThemes}
      ></i>
      {showThemes && (
        <div className="theme-grid">
          {themes.map((theme) => (
            <div
              key={theme.id}
              className="theme-swatch"
              style={{ backgroundColor: theme.primaryColor, boxShadow: `0 0 0 1px ${theme.secondaryColor}` }}
              onClick={() => handleThemeChange(theme.id)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChangeThemeButton;




