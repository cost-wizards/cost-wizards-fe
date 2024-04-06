import React from 'react';
import { Flex, Spin } from 'antd';

const Loading = () => {
	return (
		<Flex
			align='center'
			gap='middle'
		>
			<Spin
				size='large'
				colorprimary='#038e43'
			/>
		</Flex>
	);
};

export default Loading;
