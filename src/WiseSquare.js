import React, { Component } from "react";
import "./WiseSquare.css";

class WiseSquare extends Component {
  constructor(props) {
    super(props)
    this.dispenseWisdom = this.dispenseWisdom.bind(this)
  }
  static defaultProps = {
    messages: [ 
      'The secret of change is to focus all your energy not on fighting the old but on building the new.',
      'Always deliver more than expected.',
      'If your actions inspire others to dream more, learn more, do more and become more, you are a leader.',
      'There’s nothing wrong with staying small. You can do big things with a small team.',
    ]
  }
  dispenseWisdom() {
    // this.props.messages
    //can become
    //let messages = this.props.messages
    //but the fancy way todo this

    // console.log('THIS IS... ', this)
    // need to bind this to this component only. we can do it three ways
    // 1. inline -> onMouseEnter={this.dispenseWisdom.bind(this)}
    // 2. arrow function onMouseEnter={() => this.dispenseWisdom()}
    // 3. *** best way*** up in the constructor as in -> this.dispenseWisdom = this.dispenseWisdom.bind(this)
    // 4. experimental way from the docs ->
    /*
      handleClick = () => {
        console.log('this is... ', this)
      }
    */

    let {messages} = this.props
    let rIndex = Math.floor(Math.random() * messages.length);
    console.log(messages[rIndex]);
  }

  render() {
    return (
      <div className="WiseSquare"
           onMouseEnter={this.dispenseWisdom}>
        😃
      </div>
    );
  }
}

export default WiseSquare;