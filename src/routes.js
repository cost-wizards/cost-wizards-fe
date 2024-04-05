import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';

const routes = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
		},
	]);

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
};

export default routes;
