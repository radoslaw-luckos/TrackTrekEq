import React from 'react';
import { mockItems, mockLists } from '../utils/Mock';
import Items from '../components/Items';
import Lists from '../components/Lists';

type Props = {};

const Sidebar = (props: Props) => {
	return (
		<nav className='sidebar'>
			<Lists listsArray={mockLists} />
			<Items itemsArray={mockItems} />
		</nav>
	);
};

export default Sidebar;
