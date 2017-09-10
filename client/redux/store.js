import {createStore} from 'redux';
import reducer from './reducer';

// TODO: configure middleware

// export configuredStore with initial state value
export default function configuredStore(initialStateValue = {todos: []}) {
	return createStore(reducer, initialStateValue)
}
