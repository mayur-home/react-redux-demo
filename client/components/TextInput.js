import React from 'react';

export default class TextInput extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			inputValue: "Initial Value"
		}
	}

	handleChange = (event) => {
		this.setState({
			inputValue: event.target.value
		});
	}

	render = () => {
		return (
			<input
				type="text"
				value={this.state.inputValue}
				onChange={this.handleChange.bind(this)}
			/>
		);
	}
}
