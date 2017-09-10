import React from 'react';
import {connect} from 'react-redux';
import TodoInput from './TodoInput.js';
import TodoList from './TodoList';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Todo List</h1>
				<TodoInput dispatch={this.props.dispatch}/>
				<TodoList dispatch={this.props.dispatch} todos={this.props.todos} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(App);
