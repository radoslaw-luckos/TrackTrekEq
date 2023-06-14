import Logo from '../components/Logo';
import { ImShare2 } from 'react-icons/im';
import { CgProfile } from 'react-icons/cg';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Button from '../components/Button';
import { ButtonColor } from '../utils/Enums';

type Props = {
	openSidebar: React.Dispatch<React.SetStateAction<boolean>>;
	isSidebarOpened: boolean;
};

const Menu = ({ openSidebar, isSidebarOpened }: Props) => {
	const [user, loading] = useAuthState(auth);
	const navigate = useNavigate();
	const logoutHandler = () => {
		auth.signOut();
		navigate('/auth');
	};

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
				<div className='topIcons'>
					<h2>Hi, {`${user?.displayName}`}!</h2>
					<CgProfile />
					<Button
						color={ButtonColor.Red}
						clickHandler={logoutHandler}
					>
						<p>Sign Out</p>
					</Button>
				</div>
			</div>
		</nav>
	);
};

export default Menu;
