import React from 'react';
import SetDefaultButtonInput from './SetDefaultButtonInput';
import TextInputValue from './TextInputValue';

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

	setDefaultValueForInput = () => {
		const defaultValue = "Initial Value";

		this.setState({
			inputValue: defaultValue
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

				<TextInputValue inputValue={this.state.inputValue}/>

				<SetDefaultButtonInput setDefaultValue={this.setDefaultValueForInput}/>
			</div>
		);
	}
}
