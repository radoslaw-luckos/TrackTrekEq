import { useContext } from 'react';
import { UserContextType } from '../context/@types.user';
import { UserContext } from '../context/UserContext';
import ListHeader from './ListHeader';
import SingleListElement from './SingleListElement';

const Lists = () => {
	const { userData } = useContext(UserContext) as UserContextType;
	return (
		<section className='userLists'>
			<ListHeader title='Your Lists' />
			<ul>
				{userData.lists.length ? (
					userData.lists.map((list) => (
						<SingleListElement
							key={list}
							list={list}
						/>
					))
				) : (
					<p>You don't have any lists yet</p>
				)}
			</ul>
		</section>
	);
};

export default Lists;
