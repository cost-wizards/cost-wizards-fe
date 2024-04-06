import React from 'react';
import { Card, Typography } from 'antd';

import AccountListItem from '../components/AccountListItem';
import Status from './Status';

import AccountName from '../assets/images/account-name.svg';
import CPU from '../assets/images/cpu.svg';
import RAM from '../assets/images/ram.svg';
import CurrentCost from '../assets/images/current-cost.svg';
import StatusIcon from '../assets/images/status.svg';
import NumberInstances from '../assets/images/numberinstances.svg';
import EstimatedSavings from '../assets/images/estimated-savings.svg';

const AccountDetailCards = (props) => {
	const { data } = props;
	return (
		<Card
			style={{
				width: '400px',
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: '#F5F5F5',
			}}
		>
			<AccountListItem
				imgName={AccountName}
				title={'Account Name'}
				value='i8Labs'
			/>

			<AccountListItem
				imgName={NumberInstances}
				title={'No. of instances'}
				value='5'
			/>

			<AccountListItem
				imgName={CPU}
				title={'CPU'}
				value='24'
			/>

			<AccountListItem
				imgName={RAM}
				title={'RAM'}
				value='200 GB'
			/>

			<AccountListItem
				imgName={CurrentCost}
				title={'Current Cost'}
				value='$1500/month'
			/>

			<AccountListItem
				imgName={EstimatedSavings}
				title={'Estimated savings'}
				value='$200/month'
			/>

			<AccountListItem
				imgName={StatusIcon}
				title={'Status'}
				value={<Status status='active' />}
			/>
		</Card>
	);
};

export default AccountDetailCards;
