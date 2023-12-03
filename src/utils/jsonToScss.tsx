function jsonToScss(jsonData: Record<string, string>) {
    let scssString = '';

    for (const [key, value] of Object.entries(jsonData)) {
        if (typeof value === 'object') {
            // For nested objects, create a nested structure in SCSS
            scssString += `$${key}: (\n`;
            for (const [innerKey, innerValue] of Object.entries(value)) {
                scssString += `  ${innerKey}: ${innerValue},\n`;
            }
            scssString += ");\n";
        } else {
            // For simple key-value pairs, create SCSS variables
            scssString += `$${key}: ${value};\n`;
        }
    }

    return scssString;
}

import { readFileSync, writeFileSync } from 'fs';

// Read the JSON file
const jsonData = JSON.parse(readFileSync('themes.json', 'utf8'));

// Convert JSON to SCSS
const scssContent = jsonToScss(jsonData);

// Write the SCSS to a file
writeFileSync('themes.scss', scssContent);

