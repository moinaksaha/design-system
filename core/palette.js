import React from 'react';
import './core.css';

/**
 * Palette to show the color scheme of any Product-line(Brand)
 */
function Palette({colorName='', colorValue='', className='' }) {
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
