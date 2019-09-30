import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Header from './Header';

const tweets = [
	{
		user: {
			name: 'Descartes',
			avatars: 'https://i.imgur.com/nlhLi3I.png',
			handle: '@rd'
		},
		content: {
			text: 'Je pense , donc je suis'
		},
		created_at: 1461113959088
	},
	{
		user: {
			name: 'Newton',
			avatars: 'https://i.imgur.com/73hZDYK.png',
			handle: '@SirIsaac'
		},
		content: {
			text: 'If I have seen further it is by standing on the shoulders of giants'
		},
		created_at: 1461116232227
	}
];

function App() {
	const addNewTweet = (tweet) => {};

	return (
		<Fragment>
			<Nav />
			<Header name='SpongeBob' profileImg='/images/profile-hex.png' />
			<main className='container'>
				<NewTweet submitTweet={submitTweet} />
				<TweetList tweets={tweets} />
			</main>
		</Fragment>
	);
}

export default App;
