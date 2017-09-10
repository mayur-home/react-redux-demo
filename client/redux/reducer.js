import _ from 'lodash';

function getUniqueId(todos) {
	return _.max(_.map(todos, 'id')) + 1;
}

export default function reducer(state, action) {

	switch (action.type) {
		case 'ADD_TODO':
			state = {...state, todos: [{
				text: action.text,
				completed: false,
				id: getUniqueId(state.todos)
			}, ...state.todos]};
			break;
		case 'COMPLETE_TODO':
			state = Object.assign({}, state, {
				todos: state.todos.map((todo) => {
					return todo.id === action.id ?
						Object.assign({}, todo, {completed: !todo.completed}) : todo
				})
			})
			break;
		default:
	}

	return state;
}
