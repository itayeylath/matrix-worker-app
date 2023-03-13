import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/_main.scss';
import { store } from './store/index';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<Provider store={store}>
		{/* <React.StrictMode> */}
		<App />
		{/* </React.StrictMode> */}
	</Provider>
);
