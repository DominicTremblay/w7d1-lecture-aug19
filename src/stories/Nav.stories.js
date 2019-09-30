import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Nav from '../Nav';

// Stories for the Nav component
storiesOf('Nav')
	.add('Default Nav', () => <Nav />)
	.add('Nav with NewTweet', () => <Nav addNewTweet={action('Add New Tweet')} />);
