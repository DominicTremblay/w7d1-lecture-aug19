import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

const Header = (props) => {
	return (
		<header className='header-main'>
			<div>
				<img src={props.profileImg} />
			</div>
			<br />
			<div>
				<h2>{props.name}</h2>
			</div>
		</header>
	);
};

export default Header;
