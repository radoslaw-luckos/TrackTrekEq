import { IoMdRemoveCircleOutline } from 'react-icons/io';

type Props = {
	list: string;
};

const SingleListElement = ({ list }: Props) => {
	return (
		<li className='userLists__item'>
			<p>{list}</p>
			<button>
				<IoMdRemoveCircleOutline />
			</button>
		</li>
	);
};

export default SingleListElement;
