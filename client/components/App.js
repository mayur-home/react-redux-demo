import React from 'react';
import {connect} from 'react-redux';
import TodoInput from './TodoInput.js';
import TodoList from './TodoList';
import {bindActionCreators} from 'redux';
import actions from '../redux/actions';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Todo List</h1>
				<TodoInput addTodo={this.props.actions.addTodo}/>
				<TodoList actions={this.props.actions} todos={this.props.todos} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
