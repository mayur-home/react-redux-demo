import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import configuredStore from './redux/store';
import {Provider} from 'react-redux';

let initialState = {
	todos: [{
		text: 'This is first todo',
		completed: false,
		id: 0
	}]
}

let store = configuredStore(initialState);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
