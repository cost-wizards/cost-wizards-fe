import React from 'react';

import Login from './Login';
import { Layout } from 'antd';

const Main = () => {
	const layoutStyle = {
		height: '100vh',
		display: 'block',
		overflow: 'hidden',
	};

	return (
		<Layout style={layoutStyle}>
			<Login />
		</Layout>
	);
};

export default Main;
