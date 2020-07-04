import React, { Component } from "react";
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {todos: []}
        this.create = this.create.bind(this)
        this.remove = this.remove.bind(this)
        this.update = this.update.bind(this)
    }
    // add method to add the list item into state and list
    create(newTodo) {
        this.setState({
            // get the current list, clone it and add in new todo
            todos: [...this.state.todos, newTodo]
        })
    }
    remove(id) {
        this.setState({
            // make sure the passed-in id doesnt equal the uuid id
            todos: this.state.todos.filter(t => t.id !== id)
        })
    }
    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, task: updatedTask}
            }
            return todo
        })
        this.setState({ todos: updatedTodos })
    }
    render() {
        const todos = this.state.todos.map(todo => {
            return (
                <Todo 
                    key={todo.id} 
                    id={todo.id} 
                    task={todo.task} 
                    removeTodo={this.remove}
                    updatedTodo={this.update}
                />
            ) 
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