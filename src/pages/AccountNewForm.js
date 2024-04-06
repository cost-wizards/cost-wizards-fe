import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';

const onFinish = (values) => {
	console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
	console.log('Failed:', errorInfo);
};

const AccountNewForm = (props) => {
	const [formLayout, setFormLayout] = useState('vertical');
	const { showEcModal } = props;
	const onFormLayoutChange = ({ layout }) => {
		setFormLayout(layout);
	};

	return (
		<Form
			name='basic'
			layout={formLayout}
			initialValues={{
				layout: formLayout,
			}}
			labelCol={{
				span: 8,
			}}
			wrapperCol={{
				span: 24,
			}}
			style={{
				maxWidth: '100%',
			}}
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete='off'
		>
			<Form.Item
				label='Name'
				name='name'
				rules={[
					{
						required: true,
						message: 'Please enter your account name!',
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label='Access Key'
				name='access-key'
				rules={[
					{
						required: true,
						message: 'Please enter your Access key',
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label='Secret Key'
				name='secret-key'
				rules={[
					{
						required: true,
						message: 'Please enter your secret key',
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label='Session Token'
				name='session-token'
				rules={[
					{
						required: true,
						message: 'Please enter your session token',
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label='Region'
				name='region'
				rules={[
					{
						required: true,
						message: 'Please enter your region',
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item style={{ marginTop: '12px' }}>
				<Button
					type='primary'
					htmlType='submit'
					className=''
					onClick={showEcModal}
				>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default AccountNewForm;
