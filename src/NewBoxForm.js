import React, { Component } from 'react'

class NewBoxForm extends Component {
    constructor(props){
        super(props)
        this.state = {height: '', width: '', color: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    handleSubmit(e){
        // don't refresh the page
        e.preventDefault()
        // get entire state
        this.props.createBox(this.state)
        // clear the fields once submitted
        this.setState({
            height: '',
            width: '',
            color: '',
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='height'>Height</label>
                    <input 
                        type='text' 
                        name='height' 
                        value={this.state.height} 
                        id='height'
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='width'>Width</label>
                    <input 
                        type='text' 
                        name='width' 
                        value={this.state.width} 
                        id='width'
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='color'>Color</label>
                    <input 
                        type='text' 
                        name='color' 
                        value={this.state.color} 
                        id='color'
                        onChange={this.handleChange}
                    />
                </div>
                <button>Add nEw Box</button>
            </form>
        )
    }
}

export default NewBoxForm;