type boxProps = {
	children: React.ReactNode;
};
const Box = ({ children }: boxProps) => {
	return <div className='boxContainer'>{children}</div>;
};

export default Box;
