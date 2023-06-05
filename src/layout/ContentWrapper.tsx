import { useLocation } from 'react-router';
import Menu from './Menu';

type contentWrapperProps = {
	children: React.ReactNode;
};

const ContentWrapper = ({ children }: contentWrapperProps) => {
	const location = useLocation();
	const currentPath = location.pathname;
	return (
		<>
			<main className='contentWrapper'>
				{currentPath !== '/auth' && <Menu />}
				{children}
			</main>
		</>
	);
};

export default ContentWrapper;
