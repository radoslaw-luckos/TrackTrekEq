import Logo from '../Logo';
import { ImShare2 } from 'react-icons/im';
import { CgProfile } from 'react-icons/cg';

const Menu = () => {
	return (
		<nav className='menu'>
			<header className='logo'>
				<Logo />
			</header>
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
