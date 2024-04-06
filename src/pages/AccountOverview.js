import React, { useState } from 'react';
import Header from '../components/Header';
import CardOutlined from '../components/CardOutlined';
import AccountDetailCards from '../components/AccountDetailCards';

import AccountNewForm from './AccountNewForm';

import { PlusOutlined } from '@ant-design/icons';

import { Typography, Row, Col, Flex, Button, Modal } from 'antd';

const AccountOverview = () => {
	const { Title } = Typography;

	const titleStyle = {
		fontWeight: '700',
	};

	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
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
						AWS Accounts Overview
					</Title>

					<Flex
						gap='middle'
						align='start'
						style={{ marginTop: '32px' }}
					>
						<CardOutlined
							totalNumber='3'
							name='Connected Accounts'
							subtitle='Your linked AWS accounts'
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
								Your Accounts
							</Title>
							<Button
								icon={<PlusOutlined />}
								style={{ background: '#038E43', color: 'white' }}
								onClick={showModal}
							>
								Add New Button
							</Button>
						</Flex>
					</div>

					<Flex
						align='center'
						justify='space-between'
						gap='24px'
						style={{ marginTop: '32px' }}
					>
						<AccountDetailCards />
						<AccountDetailCards />
						<AccountDetailCards />
					</Flex>
				</Col>
			</Row>
			<Modal
				title='Add New Account'
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[]}
			>
				<div style={{ marginTop: '20px' }}>
					<AccountNewForm />
				</div>
			</Modal>
		</div>
	);
};

export default AccountOverview;
