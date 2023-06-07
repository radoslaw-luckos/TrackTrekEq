import { auth } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { ButtonColor } from '../utils/Enums';
import ContentWrapper from '../layout/ContentWrapper';
import { useEffect } from 'react';
import { db } from '../utils/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const Home = () => {
	const [user, loading] = useAuthState(auth);
	const navigate = useNavigate();
	const usersRef = collection(db, 'users');

	const logoutHandler = () => {
		auth.signOut();
		navigate('/auth');
	};

	useEffect(() => {
		if (!user) {
			navigate('/auth');
		}
		if (user) {
			const getUserData = async () => {
				const userDataQuery = query(usersRef, where('email', '==', user.email));
				const data = await getDocs(userDataQuery);
				console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
			};
			getUserData();
		}
	}, []);

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
