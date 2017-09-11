import React from 'react';

export default class TextInput extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			inputValue: "Type your Todo here"
		}
	}

	handleChange = (event) => {
		this.setState({
			inputValue: event.target.value
		});
	}

	addTodo = (event) => {
		event.preventDefault();
		this.props.addTodo(this.state.inputValue)
	}

	render = () => {
		return (
			<div>
				<form onSubmit={this.addTodo}>
					<input
						type="text"
						value={this.state.inputValue}
						onChange={this.handleChange.bind(this)}
					/>

					<button
						type="submit"
					>
						Add todo
					</button>
				</form>
			</div>
		);
	}
}
