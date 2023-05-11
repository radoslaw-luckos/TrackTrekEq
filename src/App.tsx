import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';

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
