import { auth } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Button from '../components/layout/Button';
import { ButtonColor } from '../utils/Enums';
import Menu from '../components/layout/Menu';
import ContentWrapper from '../components/layout/ContentWrapper';

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
	if (user)
		return (
			<ContentWrapper>
				<Menu />
				<h1>Hi {`${user.displayName}`!}</h1>
				<Button
					color={ButtonColor.Red}
					clickHandler={logoutHandler}
				>
					<p>Sign Out</p>
				</Button>
			</ContentWrapper>
		);
};

export default Home;
