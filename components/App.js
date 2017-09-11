import React, { Component } from 'react'
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'
import { connect } from 'react-redux'
import UserInfo from './UserInfo'

class App extends Component {
	render() {
		return (
			<div className="app">
				<div><h1>Todo List</h1></div>
				<UserInfo dispatch={this.props.dispatch} user={this.props.user}  />
				<ToDoInput dispatch={this.props.dispatch}/>
				<ToDoList dispatch={this.props.dispatch} todos={this.props.todos}/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(App)