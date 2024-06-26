import React from 'react';
import { Typography } from 'antd';

const AccountListItem = (props) => {
	const { imgName, title, value } = props;
	const { Paragraph } = Typography;

	const parentFlexStyle = {
		display: 'flex',
		alignCenter: 'center',
		gap: '4px',
		width: '50%',
	};

	const flexLayoutStyle = {
		display: 'flex',
		justifyContent: 'space-between',
		alignCenter: 'center',
		marginBottom: '12px',
		width: '100%',
	};

	return (
		<div
			style={flexLayoutStyle}
			className='account-list'
		>
			<div
				style={parentFlexStyle}
				className='account-list-item'
			>
				<img
					src={imgName}
					alt='Account name'
				/>
				<Paragraph
					level={1}
					style={{
						fontSize: '16px',
						marginBottom: 0,
						color: 'rgba(0,0,0,65%)',
					}}
				>
					{title}
				</Paragraph>
			</div>
			{value && (
				<span
					className='account-list-value'
					style={{
						fontWeight: 700,
						fontSize: '16px',
						alignSelf: 'flex-end',
						width: '80%',
					}}
				>
					{value}
				</span>
			)}
		</div>
	);
};

export default AccountListItem;
