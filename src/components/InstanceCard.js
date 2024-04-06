import React from 'react';
import { Card } from 'antd';

import AccountListItem from '../components/AccountListItem';
import Status from './Status';

import AccountName from '../assets/images/account-name.svg';
import CPU from '../assets/images/cpu.svg';
import RAM from '../assets/images/ram.svg';
import CurrentCost from '../assets/images/current-cost.svg';
import StatusIcon from '../assets/images/status.svg';
import NumberInstances from '../assets/images/numberinstances.svg';
import EstimatedSavings from '../assets/images/estimated-savings.svg';

const InstanceCard = () => {
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
				title={'Name'}
				value='Leapfrog Nepal'
			/>

			<AccountListItem
				imgName={NumberInstances}
				title={'ID'}
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
				title={'Cost per hour'}
				value='$1500/month'
			/>

			<AccountListItem
				imgName={StatusIcon}
				title={'Status'}
				value={<Status status='active' />}
			/>
		</Card>
	);
};

export default InstanceCard;
