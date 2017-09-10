import React from 'react';
import actions from '../redux/actions';

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

	addTodo = () => {
		this.props.dispatch(actions.addTodo(this.state.inputValue))
	}

	render = () => {
		return (
			<div>
				<input
					type="text"
					value={this.state.inputValue}
					onChange={this.handleChange.bind(this)}
				/>

				<button
					type="button"
					onClick={this.addTodo}
				>
					Add todo
				</button>
			</div>
		);
	}
}
