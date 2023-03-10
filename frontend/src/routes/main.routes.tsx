import React, { useState, useEffect } from 'react';

import HomePage from '../pages/ home-page';

import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/login';
import { NotFound } from '../pages/not-found';

export const MainRoutes = () => {

	return (
		<>
			<Routes>
				<Route index element={<Login />} />
				<Route path="login" element={<HomePage />} />
				{<Route path="*" element={<NotFound />} />}
			</Routes>
		</>
	);
};
