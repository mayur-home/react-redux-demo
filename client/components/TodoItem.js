import React from 'react';
import actions from '../redux/actions';

export default class TodoItem extends React.Component {
	markAsComplete = () => {
		this.props.dispatch(actions.completeTodo(this.props.todo.id));
	}

	delete = () => {
		this.props.dispatch(actions.deleteTodo(this.props.todo.id));
	}

	render = () => {
		return (
			<li key={this.props.todo.id}>
				<div>{this.props.todo.text}</div>
				<button type="button" onClick={this.markAsComplete}>Mark as completed</button>
				<button type="button" onClick={this.delete}>Delete todo</button>
			</li>
		)
	}
}
