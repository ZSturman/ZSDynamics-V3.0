import React, { useState } from 'react';

interface Theme {
    id: string;
    name: string;
    primaryColor: string;
    secondaryColor: string;
    primaryText: string;
    secondaryText: string;
    highlighAccent: string;
    fontFamily: string;
  }

interface PalettesProps {
    onResult: (result: string) => void;
    themes: Theme[]; 
}

const Palettes: React.FC<PalettesProps> = ({ onResult, themes }) => {
    const [hoveredThemeId, setHoveredThemeId] = useState<string | null>(null);

    const sendResult = (themeID: string) => {
        onResult(themeID);
    }

    return (
        <div className="palettes-container">
            {themes.map((theme) => {
                const isHovered = theme.id === hoveredThemeId;
                const style = {
                    backgroundColor: theme.primaryColor,
                    border: isHovered ? `4px solid ${theme.highlighAccent}` : `2px solid ${theme.secondaryText}`,
                };

                return (
                    <div
                        key={theme.id}
                        className="palette-swatch"
                        style={style}
                        onClick={() => sendResult(theme.id)}
                        onMouseOver={() => setHoveredThemeId(theme.id)}
                        onMouseOut={() => setHoveredThemeId(null)}
                    >
                    </div>
                );
            })}
        </div>
    );
}

export default Palettes;
