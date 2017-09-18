let actions = {
	addTodo: function(text) {
		return {
			type: 'ADD_TODO',
			text: text
		}
	},
	completeTodo: function(id) {
		return {
			type: 'COMPLETE_TODO',
			id: id
		}
	},
	deleteTodo: function(id) {
		return {
			type: 'DELETE_TODO',
			id: id
		}
	},
	updateUserId: function() {
		return {
			type: 'UPDATE_USER_ID',
			id: Date.now()
		}
	}
};

export default actions;
