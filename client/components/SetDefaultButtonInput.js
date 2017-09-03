import React from 'react';

export default class SetDefaultButtonInput extends React.Component {
	render = () => {
		return (
			<button
				type="button"
				onClick={this.props.setDefaultValue}
			>
				Set Default Value
			</button>
		);
	}
}
