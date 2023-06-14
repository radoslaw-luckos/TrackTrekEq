import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/HomePage';
import Auth from './pages/AuthPage';
import { Path } from './utils/Enums';

function App() {
	const location = useLocation();
	return (
		<>
			<Routes
				location={location}
				key={location.pathname}
			>
				<Route
					path={Path.Auth}
					element={<Auth />}
				/>
				<Route
					path={Path.Home}
					element={<Home />}
				/>
			</Routes>
		</>
	);
}

export default App;
