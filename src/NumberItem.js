import React, { Component } from "react"

class NumberItem extends Component {
    constructor(props) {
        super(props)
        this.handleRemove = this.handleRemove.bind(this)
    }
    handleRemove(evt) {
        this.props.remove(this.props.value)
    }

  render() {
    return (
      <li>
        {this.props.value}
        {/* {dont call remove directly, call the abstracted handle function} */}
        <button onClick={this.handleRemove}>X</button>
      </li>
    )
  }
}

export default NumberItem
