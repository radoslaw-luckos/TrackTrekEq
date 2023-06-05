import { IoMdClose } from 'react-icons/io';

type Props = {
	item: string;
};

const SingleItemElement = ({ item }: Props) => {
	return (
		<li className='userItems__item'>
			<p>{item}</p>
			<button>
				<IoMdClose />
			</button>
		</li>
	);
};

export default SingleItemElement;
