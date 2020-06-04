import React, { Component } from "react";
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {todos: [{task: "Add the numbers"},{task: "Water the Buffalo"}]}
        this.create = this.create.bind(this)
    }
    // add method to add the list item into state and list
    create(newTodo) {
        this.setState({
            // get the current list, clone it and add in new todo
            todos: [...this.state.todos, newTodo]
        })
    }
    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo task={todo.task} />
        })
        return (
            <div className='Ball'>
            <h1>Todo List</h1>
            {/* now createTodo is a prop getting passed down into the form */}
            <NewTodoForm createTodo={this.create}/>
            <ul>
                {todos}
            </ul>
            </div>
        )
    }
}

export default TodoList