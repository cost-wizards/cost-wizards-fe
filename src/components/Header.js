import React from 'react';
import Logo from '../assets/images/logo.png';

const Header = () => {
	const headerLayoutStyle = {
		display: 'flex',
		padding: '20px 40px',
		background: 'white',
		width: '100vh',
		justifyContent: 'space-between',
		alignItems: 'center',
	};
	return (
		<div style={headerLayoutStyle}>
			<img
				src={Logo}
				alt='Logo of our product'
			/>
			<div></div>
		</div>
	);
};

export default Header;
