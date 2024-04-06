import React from 'react';

import Login from './Login';
import { Flex, Layout, Typography } from 'antd';
import Title from 'antd/es/skeleton/Title';

const Main = () => {
	const layoutStyle = {
		height: '100vh',
		display: 'block',
		overflow: 'hidden',
	};

	const flexLayout = {
		height: '100%',
	};
	return (
		<Layout style={layoutStyle}>
			<Login />
		</Layout>
	);
};

export default Main;
