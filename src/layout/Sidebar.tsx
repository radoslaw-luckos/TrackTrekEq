import Items from '../components/Items';
import Lists from '../components/Lists';

type Props = {
	isSidebarOpened: boolean;
};

const Sidebar = ({ isSidebarOpened }: Props) => {
	return (
		<nav className={`sidebar ${!isSidebarOpened && 'sidebar--closed'}`}>
			<Lists />
			<Items />
		</nav>
	);
};

export default Sidebar;
