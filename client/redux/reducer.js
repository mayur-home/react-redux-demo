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
		default:
	}

	return state;
}
