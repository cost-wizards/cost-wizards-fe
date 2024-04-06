import React from 'react';
import classNames from 'classnames';

const Status = (props) => {
	const { status = 'active' } = props;

	const capitalizeFirstLetter = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	const activeClassNames = classNames('status', {
		active: status === 'status--active',
		inactive: status === 'status--inactive',
		idle: status === 'status--idle',
	});
	return (
		<div className='status-block'>
			<span className='status'></span>
			{capitalizeFirstLetter(status)}
		</div>
	);
};

export default Status;
