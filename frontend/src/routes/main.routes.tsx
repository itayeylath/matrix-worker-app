import React, { useState, useEffect } from 'react';

import HomePage from '../pages/ home-page';

import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/login';
import { NotFound } from '../pages/not-found';
import { Signup } from '../pages/signup';

export const MainRoutes = () => {
	return (
		<>
			<Routes>
				<Route index element={<Login />} />
				<Route path="signup" element={<Signup />} />
				<Route path="home" element={<HomePage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
};
