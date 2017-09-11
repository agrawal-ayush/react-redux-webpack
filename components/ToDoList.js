import React, { Component } from 'react'
import ToDoItem from './ToDoItem'
class ToDoList extends Component {

 	render() {
		return (
			<div>
				<ul>
					{
						this.props.todos.map((todo) => {
							return <ToDoItem key={todo.id} todo={todo} dispatch={this.props.dispatch}/>
						})
					}
				</ul>
			</div>
		)
	}
}

export default ToDoList