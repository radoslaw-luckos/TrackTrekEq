import { useContext } from 'react';
import { UserContextType } from '../context/@types.user';
import { UserContext } from '../context/UserContext';
import ListHeader from './ListHeader';
import SingleItemElement from './SingleItemElement';

const Items = () => {
	const { userData } = useContext(UserContext) as UserContextType;

	return (
		<section className='userItems'>
			<ListHeader title='Your Items' />
			<ul>
				{userData.items.length ? (
					userData.items.map((item) => (
						<SingleItemElement
							key={item}
							item={item}
						/>
					))
				) : (
					<p>You don't have any lists yet</p>
				)}
			</ul>
		</section>
	);
};

export default Items;
