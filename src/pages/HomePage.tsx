import { auth } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { ButtonColor } from '../utils/Enums';
import ContentWrapper from '../layout/ContentWrapper';
import Sidebar from '../layout/Sidebar';

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
	if (user) console.log(user);

	return (
		<ContentWrapper>
			<div className='homePage'>
				<Sidebar />
				<div className='homePage__content'>
					<h1>Hi {`${user.displayName}`!}</h1>
					<Button
						color={ButtonColor.Red}
						clickHandler={logoutHandler}
					>
						<p>Sign Out</p>
					</Button>
				</div>
			</div>
		</ContentWrapper>
	);
};

export default Home;
