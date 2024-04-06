import React from 'react';
import './index.css';
import * as ReactDOM from 'react-dom/client';
import Main from './pages/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import reportWebVitals from './reportWebVitals';
import AccountSetup from './pages/AccountSetup';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
	},
	{
		path: '/account-setup',
		element: <AccountSetup />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* configuring theme with ANT design */}
		<ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
			<RouterProvider router={router} />
		</ConfigProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
