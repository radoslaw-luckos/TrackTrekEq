import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/HomePage';
import Auth from './pages/AuthPage';

function App() {
	const location = useLocation();
	return (
		<>
			<Routes
				location={location}
				key={location.pathname}
			>
				<Route
					path='/'
					element={<Home />}
				/>

				<Route
					path='/auth'
					element={<Auth />}
				/>
			</Routes>
		</>
	);
}

export default App;
