import ListHeader from './ListHeader';
import SingleItemElement from './SingleItemElement';

type Props = {
	itemsArray: string[];
};

const Items = ({ itemsArray }: Props) => {
	return (
		<section className='userItems'>
			<ListHeader title='Your Items' />
			<ul>
				{itemsArray.map((item) => (
					<SingleItemElement item={item} />
				))}
			</ul>
		</section>
	);
};

export default Items;
