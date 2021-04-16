import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../Button';

const buttonStories = storiesOf('Button', module);

const clickHandler = () => alert('Clicked!');
const propsMap = {
	link: 'https://www.cloudsense.com',
	openInNewTab: true
};

buttonStories.add('enabled', () => {
	return <Button enabled label="Some label" clicked={clickHandler} />;
});

buttonStories.add('onClick', () => {
	return <Button enabled label="click me" clicked={clickHandler} />;
});

buttonStories.add('additionalProps', () => {
	return (
		<Button enabled additionalProps={propsMap} label="Aditional props" clicked={clickHandler} />
	);
});
