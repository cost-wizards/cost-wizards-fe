import React from 'react';
import Logo from '../assets/images/logo.png';
import { Row, Col } from 'antd';

const Header = () => {
	const headerLayoutStyle = {
		display: 'flex',
		padding: '20px 40px',
		background: 'white',
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
		background: '#252F3E',
		boxSizing: 'border-box',
		marginBottom: '40px',
	};
	return (
		<Row align='center'>
			<div style={headerLayoutStyle}>
				<Col span={18}>
					<img
						src={Logo}
						alt='Logo of our product'
					/>
					<div></div>
				</Col>
			</div>
		</Row>
	);
};

export default Header;
