import Box from '../components/layout/Box';
import Button from '../components/layout/Button';
import ContentWrapper from '../components/layout/ContentWrapper';
import Logo from '../components/Logo';
import { ButtonColor } from '../utils/Enums';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../utils/firebase';

const Auth = () => {
	//Sign in with Google
	const googleProvider = new GoogleAuthProvider();
	const googleLogin = async () => {
		try {
			const result = await signInWithPopup(auth, googleProvider);
			console.log(result.user.displayName);
		} catch (error) {
			console.log(error);
		}
	};
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
					It is an app that helps you to track easily your whole mountain equipment!
				</h2>
				<p className='authPageText'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque cupiditate
					libero aperiam. Porro nostrum recusandae tempore dicta officia assumenda ut, reiciendis,
					id temporibus alias eum necessitatibus quis consequuntur perspiciatis!
				</p>
				<h3 className='authPageMessage'>Join it wright now!</h3>
				<div className='authPageSingInBtns'>
					<Button
						color={ButtonColor.Green}
						clickHandler={googleLogin}
					>
						<FcGoogle />
						<p>Sign in with Google</p>
					</Button>
					<Button color={ButtonColor.Blue}>
						<AiFillFacebook />
						<p>Sign in with Facebook</p>
					</Button>
				</div>
			</Box>
		</ContentWrapper>
	);
};

export default Auth;
