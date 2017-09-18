import _ from 'lodash';

function getUniqueId(todos) {
	return _.max(_.map(todos, 'id')) + 1;
}

export default function todoReducer(todos = [], action) {

	switch (action.type) {
		case 'ADD_TODO':
			todos = [{
				text: action.text,
				completed: false,
				id: getUniqueId(todos)
			}, ...todos];
			break;
		case 'COMPLETE_TODO':
			todos = todos.map((todo) => {
				return todo.id === action.id ?
					Object.assign({}, todo, {completed: !todo.completed}) : todo
			});
			break;
		case 'DELETE_TODO':
			todos = _.reject(todos, {id: action.id});
			break;
		default:
	}

	return todos;
}
