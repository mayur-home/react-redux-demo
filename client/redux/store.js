import {applyMiddleware, compose, createStore} from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';

// TODO: configure middleware
let storeWithConfiguredMiddleware = compose(
	applyMiddleware(logger)
)(createStore);

// export configuredStore with initial state value
export default function configuredStore(initialStateValue = {todos: []}) {
	return storeWithConfiguredMiddleware(reducer, initialStateValue)
}
