import { Link } from 'react-router-dom';
import { Path } from '../utils/Enums';

type Props = {};

const WelcomeComponent = (props: Props) => {
	return (
		<div className='welcome'>
			<Link to={Path.List}>To List</Link>
		</div>
	);
};

export default WelcomeComponent;
