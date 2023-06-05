import ListHeader from './ListHeader';
import SingleListElement from './SingleListElement';

type Props = {
	listsArray: string[];
};

const Lists = ({ listsArray }: Props) => {
	return (
		<section className='userLists'>
			<ListHeader title='Your Lists' />
			<ul>
				{listsArray.map((list) => (
					<SingleListElement list={list} />
				))}
			</ul>
		</section>
	);
};

export default Lists;
