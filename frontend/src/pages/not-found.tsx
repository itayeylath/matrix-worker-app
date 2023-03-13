import React from 'react';

import { useNavigate } from 'react-router';
interface NotFoundPageProps {}

export const NotFound = () => {
	const navigate = useNavigate();

	return (
		<div className="not-found-page">
			<h1 className="not-found-page__heading">404 Not Found</h1>
			<p className="not-found-page__message">The page you are looking for cannot be found.</p>
			<button className="not-found-page-btn" onClick={() => navigate('/')}> Back to home page </button>
		</div>
	);
};
