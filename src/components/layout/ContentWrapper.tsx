type contentWrapperProps = {
	children: React.ReactNode;
};

const ContentWrapper = ({ children }: contentWrapperProps) => {
	return <main className='contentWrapper'>{children}</main>;
};

export default ContentWrapper;
