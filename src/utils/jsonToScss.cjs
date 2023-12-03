"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function jsonToScss(jsonData) {
    var scssString = '';
    for (var _i = 0, _a = Object.entries(jsonData); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (typeof value === 'object') {
            // For nested objects, create a nested structure in SCSS
            scssString += "$".concat(key, ": (\n");
            for (var _c = 0, _d = Object.entries(value); _c < _d.length; _c++) {
                var _e = _d[_c], innerKey = _e[0], innerValue = _e[1];
                scssString += "  ".concat(innerKey, ": ").concat(innerValue, ",\n");
            }
            scssString += ");\n";
        }
        else {
            // For simple key-value pairs, create SCSS variables
            scssString += "$".concat(key, ": ").concat(value, ";\n");
        }
    }
    return scssString;
}
var fs_1 = require("fs");
// Read the JSON file
var jsonData = JSON.parse((0, fs_1.readFileSync)('themes.json', 'utf8'));
// Convert JSON to SCSS
var scssContent = jsonToScss(jsonData);
// Write the SCSS to a file
(0, fs_1.writeFileSync)('themes.scss', scssContent);
