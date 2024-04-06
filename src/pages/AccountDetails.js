import React from 'react';
import Header from '../components/Header';
import CardOutlined from '../components/CardOutlined';
import AccountDetailCards from '../components/AccountDetailCards';

import { PlusOutlined } from '@ant-design/icons';

import { Typography, Row, Col, Flex, Button } from 'antd';

const AccountDetails = () => {
	const { Title } = Typography;

	const titleStyle = {
		fontWeight: '700',
	};
	return (
		<div>
			<Header />

			<Row align='center'>
				<Col span={18}>
					<Title
						level={2}
						style={titleStyle}
					>
						AWS Accounts Details
					</Title>

					<div className='account-detail-card'>
						<AccountDetailCards />
					</div>

					<Flex
						gap='middle'
						align='start'
						style={{ marginTop: '32px' }}
					>
						<CardOutlined
							totalNumber='3'
							name='AWS instances'
							subtitle='Total AWS instances in your account.'
						/>

						<CardOutlined
							totalNumber='$ 4000.00'
							name='Monthly Cost'
							subtitle='Current monthly charges'
						/>

						<CardOutlined
							totalNumber='25'
							name='Optimizations Run'
							subtitle='25 optimization remaining'
						/>

						<CardOutlined
							totalNumber='$ 2300.00'
							name='Estimated Cost Savings'
							subtitle='42% saving/month'
						/>
					</Flex>

					<div className='your-account'>
						<Flex
							align='center'
							justify='space-between'
							style={{ marginTop: '32px' }}
						>
							<Title
								level={2}
								style={{
									fontSize: '24px',
									lineHeight: '32px',
									fontWeight: '700',
								}}
							>
								Instance Details
							</Title>
						</Flex>
					</div>

					<Flex
						align='center'
						justify='space-between'
						gap='24px'
						style={{ marginTop: '32px' }}
					>
						<p>Table</p>
					</Flex>
				</Col>
			</Row>
		</div>
	);
};

export default AccountDetails;
