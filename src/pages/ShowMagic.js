import React from 'react';
import Header from '../components/Header';

const ShowMagic = () => {
	return (
		<>
			<Header />
			<div className='magic'>
				<iframe
					src='https://giphy.com/embed/lFAMsSMekvXbyFJgVe'
					width='480'
					height='480'
					frameBorder='0'
					class='giphy-embed'
					allowFullScreen
				></iframe>
				<p>
					<a href='https://giphy.com/stickers/stars-glitter-sparkles-lFAMsSMekvXbyFJgVe'></a>
				</p>

				<h3>Casting spells</h3>

				<p>Brewing some portions! Casting some spells!</p>
			</div>
		</>
	);
};

export default ShowMagic;
