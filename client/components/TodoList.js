import React from 'react';
import TodoItem from './TodoItem'

export default class TodoList extends React.Component {
	render = () => {
		return (
			<ui>
				{
					this.props.todos.map((todo) => {
						return <TodoItem dispatch={this.props.dispatch} key={todo.id} todo={todo} />
					})
				}
			</ui>
		);
	}
}
