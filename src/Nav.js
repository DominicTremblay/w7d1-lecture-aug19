import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import './Nav.scss';

const Nav = (props) => {
	return (
		<nav>
			<div className='nav-content'>
				<span>tweeter</span>
				<div className='write-tweet' onClick={props.addNewTweet}>
					<p>
						<span>Write</span> a new tweet
					</p>
					<FontAwesomeIcon icon={faAngleDoubleDown} />
				</div>
			</div>
		</nav>
	);
};

export default Nav;
