import React from 'react';
import './core.css';

/**
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props
 */
function Button({ type = 'button', onClick, children, className }) {
	return (
		<button 
			type={type} 
			onClick={onClick} 
			className={className} 
		>
			{children}
		</button>
	);
}

export default Button;
