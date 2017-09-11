import React, { Component } from 'react'
import actions from '../redux/actions'
class UserInfo extends Component {

	handleNewId() {
		this.props.dispatch(actions.createNewUserId())
	}

 	render() {
		return (
			<l1>
				<div>username: {this.props.user.username}</div>
				<div>id: {this.props.user.id}</div>
				<button onClick={this.handleNewId.bind(this)}>Update with random ID</button>
			</l1>
		)
	}
}

export default UserInfo