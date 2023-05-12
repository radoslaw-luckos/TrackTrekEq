import Box from '../components/layout/Box';
import ContentWrapper from '../components/layout/ContentWrapper';
import Logo from '../components/Logo';

const Auth = () => {
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
			</Box>
		</ContentWrapper>
	);
};

export default Auth;
