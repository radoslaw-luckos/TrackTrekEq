import { useContext } from 'react';
import { IoMdClose } from 'react-icons/io';
import { UserContextType } from '../context/@types.user';
import { UserContext } from '../context/UserContext';

type Props = {
	id: number;
	itemName: string;
};

const SingleItemElement = ({ id, itemName }: Props) => {
	const { userData, deleteItem } = useContext(UserContext) as UserContextType;

	return (
		<li className='userItems__item'>
			<p>{itemName}</p>
			<button onClick={() => deleteItem(id, userData.id)}>
				<IoMdClose />
			</button>
		</li>
	);
};

export default SingleItemElement;
