import React from 'react';
import { ButtonColor } from '../utils/Enums';

type ButtonProps = {
	children: React.ReactNode;
	color: ButtonColor;
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
