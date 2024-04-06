import React, { useState } from 'react';

import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values) => {
	console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
	console.log('Failed:', errorInfo);
};

const SetupEcInstance = () => {
	const [formLayout, setFormLayout] = useState('vertical');
	return (
		<Form
			name='basic'
			labelCol={{
				span: 8,
			}}
			wrapperCol={{
				span: 24,
			}}
			style={{
				maxWidth: 600,
			}}
			initialValues={{
				remember: true,
			}}
			layout={formLayout}
			initialValues={{
				layout: formLayout,
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete='off'
		>
			<div className='form-border'>
				<Form.Item
					name='1'
					valuePropName='checked'
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Checkbox>i_101 ( instance name)</Checkbox>
				</Form.Item>

				<Form.Item
					name='2'
					valuePropName='checked'
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Checkbox>i_102 ( instance name)</Checkbox>
				</Form.Item>

				<Form.Item
					name='3'
					valuePropName='checked'
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Checkbox>i_103 ( instance name)</Checkbox>
				</Form.Item>

				<Form.Item
					name='4'
					valuePropName='checked'
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Checkbox>i_104 ( instance name)</Checkbox>
				</Form.Item>
			</div>

			<Form.Item
				wrapperCol={{
					offset: 8,
					span: 16,
				}}
			>
				<Button
					type='primary'
					htmlType='submit'
				>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default SetupEcInstance;
