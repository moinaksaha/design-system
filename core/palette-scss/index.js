import React from 'react';
import './style.scss';

/**
 * Palette to show the color scheme of any Product-line(Brand)
 */
function PaletteSCSS({colorName='', colorValue='', className='' }) {
	return (
		<div
			className={`palette ${className}`} 
		>
			<div className={`palette-color-name`}>{colorName}</div>
            <div className={`palette-color-value`}>{colorValue}</div>
		</div>
	);
}

export default PaletteSCSS;
