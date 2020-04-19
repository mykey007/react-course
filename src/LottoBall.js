import React, { Component } from "react";
import './LottoBall.css'
class LottoBall extends Component {
// no constructor - it's a stateless component
  render() {
      return (
          <div className='Ball'>
              {this.props.num}
          </div>
      )
  }
}

export default LottoBall