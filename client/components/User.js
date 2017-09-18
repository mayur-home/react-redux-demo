import React from 'react';

export default class User extends React.Component {
	render = () => {
		return (
			<div>
				<p>User name: <b>{this.props.user.name}</b></p>
				<p>User ID: <b>{this.props.user.id}</b></p>
				<button onClick={this.props.updateUserId}>Update user Id</button>
			</div>
		)
	}
}
