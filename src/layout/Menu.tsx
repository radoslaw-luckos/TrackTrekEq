import Logo from '../components/Logo';
import { ImShare2 } from 'react-icons/im';
import { CgProfile } from 'react-icons/cg';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';

type Props = {
	openSidebar: React.Dispatch<React.SetStateAction<boolean>>;
	isSidebarOpened: boolean;
};

const Menu = ({ openSidebar, isSidebarOpened }: Props) => {
	return (
		<nav className='menu'>
			<header className='logo'>
				<Logo />
			</header>
			<button
				className='openSidebarBtn'
				onClick={() => openSidebar(!isSidebarOpened)}
			>
				{isSidebarOpened ? <RxCross1 /> : <RxHamburgerMenu />}
			</button>
			<div className='navbar'>
				<h2 className='listName'>List Name</h2>
				<div className='topIcons'>
					<ImShare2 />
					<CgProfile />
				</div>
			</div>
		</nav>
	);
};

export default Menu;
