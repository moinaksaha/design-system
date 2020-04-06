import React from 'react';
import './style.css';

/**
 * Palette to show the color scheme of any Product-line(Brand)
 * @param {string} className - HTML Classname for the color(as per core.css)
 * @param {string} colorName - Color Name from directory(Figma/Sketch)
 * @param {string} colorValue - Hex value of Color
 */
function Palette({colorName, colorValue, className }) {
	return (
		<div
			className={`palette ${className}`} 
		>
			<div className={`palette-color-name`}>{colorName}</div>
            <div className={`palette-color-value`}>{colorValue}</div>
		</div>
	);
}

export default Palette;
