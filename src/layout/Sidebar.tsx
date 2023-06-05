import React from 'react';
import { mockItems, mockLists } from '../utils/Mock';
import Items from '../components/Items';
import Lists from '../components/Lists';

type Props = {
	isSidebarOpened: boolean;
};

const Sidebar = ({ isSidebarOpened }: Props) => {
	return (
		<nav className={`sidebar ${!isSidebarOpened && 'sidebar--closed'}`}>
			<Lists listsArray={mockLists} />
			<Items itemsArray={mockItems} />
		</nav>
	);
};

export default Sidebar;
