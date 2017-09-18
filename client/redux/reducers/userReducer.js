import _ from 'lodash';

export default function userReducer(user = {}, action) {

	switch (action.type) {
		case 'UPDATE_USER_ID':
			user = Object.assign({}, user, {id: action.id});
			break;
		default:
	}

	return user;
}
