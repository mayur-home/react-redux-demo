import React from 'react';

export default class TextInputValue extends React.Component {
	render = () => {
		return <p><b>Value in input field is:</b> {this.props.inputValue}</p>
	}
}
