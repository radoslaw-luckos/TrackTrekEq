import { auth } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { ButtonColor } from '../utils/Enums';
import ContentWrapper from '../layout/ContentWrapper';

const Home = () => {
	const [user, loading] = useAuthState(auth);
	const navigate = useNavigate();

	const logoutHandler = () => {
		auth.signOut();
	};

	if (!user) {
		navigate('/auth');
	}
	if (loading) return <h1>Loading ...</h1>;

	return (
		<ContentWrapper>
			<div className='homePage'>
				<h1>Hi {`${user.displayName}`!}</h1>
				<Button
					color={ButtonColor.Red}
					clickHandler={logoutHandler}
				>
					<p>Sign Out</p>
				</Button>
			</div>
		</ContentWrapper>
	);
};

export default Home;
