import { GiMountains } from 'react-icons/gi';
import { useLocation } from 'react-router';

const Logo = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	return (
		<header className={`logo ${currentPath !== '/auth' && 'logo--light logo--small'}`}>
			<GiMountains />
			<h1>TrackTrekEq</h1>
		</header>
	);
};

export default Logo;
