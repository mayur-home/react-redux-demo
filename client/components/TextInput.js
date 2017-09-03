import React from 'react';
import SetDefaultButtonInput from './SetDefaultButtonInput';

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
			<div>
				<input
					type="text"
					value={this.state.inputValue}
					onChange={this.handleChange.bind(this)}
				/>

				<p><b>Value in input field is:</b> {this.state.inputValue}</p>

				<SetDefaultButtonInput />
			</div>
		);
	}
}
