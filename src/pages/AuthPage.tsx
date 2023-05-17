import Box from '../components/layout/Box';
import Button from '../components/layout/Button';
import ContentWrapper from '../components/layout/ContentWrapper';
import Logo from '../components/Logo';
import { ButtonColor } from '../utils/Enums';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import {
	FacebookAuthProvider,
	GoogleAuthProvider,
	signInWithPopup,
	updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const Auth = () => {
	const [user, loading] = useAuthState(auth);
	const navigate = useNavigate();

	//Sign in with Google
	const googleProvider = new GoogleAuthProvider();
	const googleLogin = async () => {
		try {
			const result = await signInWithPopup(auth, googleProvider);
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	//Sing in with Facebook
	const fbProvider = new FacebookAuthProvider();
	const facebookLogin = async () => {
		try {
			const result = await signInWithPopup(auth, fbProvider);
			const credential = await FacebookAuthProvider.credentialFromResult(result);
			const token = credential?.accessToken;
			const photoUrl = `${result.user.photoURL}?height=500&access_token=${token}`;
			if (auth.currentUser) await updateProfile(auth.currentUser, { photoURL: photoUrl });
			console.log(result.user.photoURL);
			navigate('/');
		} catch (error) {
			console.log(error);
			//error handling TODO
		}
	};

	if (user) {
		navigate('/');
	}
	if (!user)
		return (
			<ContentWrapper>
				<img
					src='src/assets/images/authbg.jpg'
					alt='Auth Page Background'
					className='bgImage'
				/>
				<Box>
					<Logo />
					<h2 className='authPageHeading'>
						It is an app that helps you track your whole mountain equipment easily!
					</h2>
					<p className='authPageText'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque cupiditate
						libero aperiam. Porro nostrum recusandae tempore dicta officia assumenda ut, reiciendis,
						id temporibus alias eum necessitatibus quis consequuntur perspiciatis!
					</p>
					<h3 className='authPageMessage'>Join it right now!</h3>
					<div className='authPageSingInBtns'>
						<Button
							color={ButtonColor.Green}
							clickHandler={googleLogin}
						>
							<FcGoogle />
							<p>Sign in with Google</p>
						</Button>
						<Button
							color={ButtonColor.Blue}
							clickHandler={facebookLogin}
						>
							<AiFillFacebook />
							<p>Sign in with Facebook</p>
						</Button>
					</div>
				</Box>
			</ContentWrapper>
		);
};

export default Auth;
