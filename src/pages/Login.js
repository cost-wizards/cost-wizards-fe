import React from 'react';
import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd';
import LoginImage from '../assets/images/login-image.png';
const onFinish = (values) => {
	console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
	console.log('Failed:', errorInfo);
};
const Login = () => {
	const colLayoutStyle = {
		height: '100vh',
	};
	const layoutStyle = {
		display: 'block',
		height: '100%',
		width: '100%',
		objectFit: 'cover',
	};

	const flexLayout = {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		display: 'flex',
		height: '100vh',
	};

	const titleLayout = {
		justifySelf: 'flex-start',
	};

	const { Title, Paragraph } = Typography;
	return (
		<Row
			align='center'
			justify='center'
		>
			<Col
				span={12}
				style={colLayoutStyle}
			>
				<img
					src={LoginImage}
					alt=''
					style={layoutStyle}
				/>
			</Col>
			<Col
				span={12}
				style={flexLayout}
			>
				<div style={titleLayout}>
					<Title level={2}>Login</Title>
					<Paragraph>Sign in with your username and password.</Paragraph>
				</div>

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
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete='off'
				>
					<Form.Item
						label='Username'
						name='username'
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
						label='Password'
						name='password'
						rules={[
							{
								required: true,
								message: 'Please input your password!',
							},
						]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item
						wrapperCol={{
							offset: 8,
							span: 16,
						}}
					>
						<Button
							type='primary'
							htmlType='submit'
							className=''
						>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</Col>
		</Row>
	);
};
export default Login;
