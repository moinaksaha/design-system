import React from 'react';
import './style.css';

/**
 * Palette to show the color scheme of any Product-line(Brand)
 */
function PaletteCSS({colorName='', colorValue='', className='' }) {
	return (
		<div
			className={`palette ${className}`} 
		>
			<div className={`palette-color-name`}>{colorName}</div>
            <div className={`palette-color-value`}>{colorValue}</div>
		</div>
	);
}

export default PaletteCSS;
