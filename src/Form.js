import React, { Component } from 'react'


class Form extends Component {
    constructor(props){
        super(props)
        this.state = {username: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(evt){
        this.setState({username: evt.target.value})
    }
    handleSubmit(evt){
        // stop page from refreshing
        evt.preventDefault()
        //do the onSubmit things
        alert(`You typed ${this.state.username}`)
        //reset username back to empty
        this.setState({username: ''})
    }
    render() {
        return (
            <div>
                <h1>Form Demo</h1>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.username} onChange={this.handleChange} type="text"/>
                    <button>Feel good presser</button>
                </form>
            </div>
        )
    }
}


export default Form