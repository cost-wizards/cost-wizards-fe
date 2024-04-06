import React from 'react';
import { Button, Col, Form, Input, Row } from 'antd';

import { PlusOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

const AccountSetup = () => {
	const { Title } = Typography;
	return (
		<Row>
			<Col
				span={12}
				offset={6}
			>
				<Form
					name='basic'
					labelCol={{
						span: 8,
					}}
					wrapperCol={{
						span: 16,
					}}
					style={{
						maxWidth: 600,
					}}
					initialValues={{
						remember: true,
					}}
					// onFinish={onFinish}
					// onFinishFailed={onFinishFailed}
					autoComplete='off'
				>
					<Button
						type='primary'
						icon={<PlusOutlined />}
					>
						Add New
					</Button>

					<Title level={4}>Choose Accounts</Title>

					<Form.Item
						label='Account 1'
						name='accounts-1'
						rules={[
							{
								required: true,
								message: 'Please input your username!',
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label='Accounts 2'
						name='accounts-2'
						rules={[
							{
								required: true,
								message: 'Please input your password!',
							},
						]}
					>
						<Input.Password />
					</Form.Item>
				</Form>
			</Col>
		</Row>
	);
};

export default AccountSetup;
