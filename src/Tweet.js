import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import './Tweet.scss';

const Tweet = ({ user: { name, avatars, handle }, content: { text }, created_at }) => {
	return (
		<article>
			<header>
				<div className='avatar'>
					<img src={avatars} alt='avatar' className='user-avater' />
					<h2 className='user-avater'>{name}</h2>
				</div>
				<small className='user-handle'>{handle}</small>
			</header>
			<div className='body'>
				<p>{text}</p>
			</div>
			<footer>
				<small className='age'>{created_at}</small>
				<span className='actions'>
					<a href='#'>
						<FontAwesomeIcon icon={faFlag} />
					</a>
					<a href='#'>
						<FontAwesomeIcon icon={faRetweet} />
					</a>
					<a href='#'>
						<FontAwesomeIcon icon={faHeart} />
					</a>
				</span>
			</footer>
		</article>
	);
};

export default Tweet;
