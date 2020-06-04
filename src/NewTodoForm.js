import React, { Component } from 'react'

class NewTodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {task: ""}
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
        evt.preventDefault()
    }
    render() {
        return (
            <form>
                <label htmlFor="task">New Todo</label>
                <input 
                    type="text" 
                    id="task" 
                    placeholder="New Todos"
                    value={this.state.task}
                    onChange={this.handleChange}
                    name="task"
                />
            </form>
        )
    }
}

export default NewTodoForm