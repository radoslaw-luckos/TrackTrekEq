import React from 'react';

type ButtonProps = {
	children: React.ReactNode;
	color: any;
	clickHandler: any;
};

const Button = ({ children, color, clickHandler }: ButtonProps) => {
	return (
		<button
			className={`btn ${color}`}
			onClick={clickHandler}
		>
			{children}
		</button>
	);
};

export default Button;
