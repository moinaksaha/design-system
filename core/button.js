import React from 'react';

/**
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props
 */
function Button({ type = 'button', onClick, children }) {
	return (
		<button type={type} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
