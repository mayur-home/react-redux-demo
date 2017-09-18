import {applyMiddleware, compose, createStore} from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';

// TODO: configure middleware
let storeWithConfiguredMiddleware = compose(
	applyMiddleware(logger)
)(createStore);

// export configuredStore with initial state value
export default function configuredStore(initialStateValue = {todos: []}) {
	return storeWithConfiguredMiddleware(reducers, initialStateValue)
}
