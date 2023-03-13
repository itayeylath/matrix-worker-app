import { BrowserRouter } from 'react-router-dom';
import { MainRoutes } from './routes/main.routes';
const App = () => {
	return (
		<BrowserRouter>
			<MainRoutes />
		</BrowserRouter>
	);
};

export default App;
