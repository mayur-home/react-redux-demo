import React from 'react';

export default class TodoList extends React.Component {
	render = () => {
		return (
			<ui>
				{
					this.props.todos.map((todo) => {
						return <li key={todo.id}>{todo.text}</li>
					})
				}
			</ui>
		);
	}
}
