const tweet = {
	user: {
		name: 'Descartes',
		avatars: 'https://i.imgur.com/nlhLi3I.png',
		handle: '@rd'
	},
	content: {
		text: 'Je pense , donc je suis'
	},
	created_at: 1461113959088
};

// const user = tweet.user;
// const content = tweet.content;
// const created_at = tweet.created_at;

// Object Desctucturing
const { user: { name, avatars, handle }, content: { text }, created_at } = tweet;

// Spread for object
const newTweet = {
	id: 'h27d7e',
	...tweet,
	content: { text: 'Overwriting content' }
};

// Spread for Array

const users = [ 'Bob', 'Mario', 'Lucy' ];

const newUsers = [ ...users, 'Peach' ];

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
	},
	{
		user: {
			name: 'Jacob',
			avatars: 'https://i.imgur.com/73hZDYK.png',
			handle: '@SirJacob'
		},
		content: {
			text: 'If I have seen further it is by standing on the shoulders of giants'
		},
		created_at: 1461116232227
	}
];

// const tweet1 = tweets[0];
// const tweet2 = tweets[1];

// Array Desctructuring
// Spread Operator

const [ tweet1, ...otherTweets ] = tweets;

// Object Property ShortHand
const id = 'e4r5';
const coolName = 'Bob';
const txt = 'allo';

// const user = {
//   id: id
//   coolName: coolName,
//   txt: txt
// };

const user = {
	id,
	coolName,
	txt
};
