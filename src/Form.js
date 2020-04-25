import React, { Component } from 'react'


class Form extends Component {
    constructor(props){
        super(props)
        this.state = {username: '', email: '', password: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(evt){
        // using names in the inputs lets us take advantage of
        // es2015 computed properties values - setting things
        //so we wont just use username anymore, it'll get fancier
        
        //this.setState({username: evt.target.value})
        // into this (notice the square brackets - not an array)
        this.setState({[evt.target.name]: evt.target.value})

        // all three inputs call the same event handler but it
        // behaves differently based off of the name of the input itself
        //reuse this!!!
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
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text"
                        id="username"
                        name="username"
                        placeholder="username"
                        value={this.state.username} 
                        onChange={this.handleChange} 
                    />
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email"
                        value={this.state.email} 
                        onChange={this.handleChange} 
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        value={this.state.password} 
                        onChange={this.handleChange} 
                    />
                    <button>Feel good presser</button>
                </form>
            </div>
        )
    }
}


export default Form