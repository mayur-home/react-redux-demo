import React from 'react';
import TextInput from './TextInput.js';
console.log(TextInput);

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1>This is React component demo</h1>
				<TextInput />
			</div>
		);
	}
}
