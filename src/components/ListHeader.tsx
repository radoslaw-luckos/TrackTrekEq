import { GrAddCircle } from 'react-icons/gr';
type Props = {
	title: string;
	addHandler?: any;
};

const ListHeader = ({ title, addHandler }: Props) => {
	return (
		<header className='listHeader'>
			<h2 className='listHeader__title '>{title}</h2>
			<button
				className='listHeader__btn'
				onClick={() => addHandler()}
			>
				<GrAddCircle />
			</button>
		</header>
	);
};

export default ListHeader;
