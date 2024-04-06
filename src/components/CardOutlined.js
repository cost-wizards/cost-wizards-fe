import React from 'react';
import { Card, Typography } from 'antd';

const CardOutlined = (props) => {
	const { totalNumber = 0, name, subtitle } = props;
	const { Title } = Typography;
	return (
		<Card style={{ width: '380px' }}>
			<Title
				level={1}
				style={{ fontSize: '36px', lineHeight: '24px', fontWeight: '600' }}
			>
				{totalNumber}
			</Title>
			<Title
				level={3}
				style={{
					color: 'rgba(0,0,0,65%)',
					fontSize: '20px',
					fontWeight: '700',
				}}
			>
				{name}
			</Title>
			<Title
				level={4}
				style={{
					color: 'rgba(0,0,0,65%)',
					fontSize: '14px',
					fontWeight: '300',
				}}
			>
				{subtitle}
			</Title>
		</Card>
	);
};

export default CardOutlined;
