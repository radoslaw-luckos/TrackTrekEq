import { useState } from 'react';
import { useLocation } from 'react-router';
import Menu from './Menu';
import Sidebar from './Sidebar';

type contentWrapperProps = {
	children: React.ReactNode;
};

const ContentWrapper = ({ children }: contentWrapperProps) => {
	const location = useLocation();
	const currentPath = location.pathname;
	const [isSidebarOpened, setSidebarOpened] = useState<boolean>(false);
	return (
		<>
			<main className='contentWrapper'>
				{currentPath !== '/auth' && (
					<Menu
						openSidebar={setSidebarOpened}
						isSidebarOpened={isSidebarOpened}
					/>
				)}
				<div className='contentWrapper__container'>
					<Sidebar isSidebarOpened={isSidebarOpened} />
					<section className='contentSection'>{children}</section>
				</div>
			</main>
		</>
	);
};

export default ContentWrapper;
